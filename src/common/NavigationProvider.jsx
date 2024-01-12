import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const navigate = useNavigate();

  const handleCloseModal = (name) => {
    //The context I want to provide is the function here

    const openModal = document.querySelector(".modal.show"); // Select the currently open modal
    if (openModal) {
      const modal = new window.bootstrap.Modal(openModal);
      modal.hide(); // Close the modal
    }

    console.log("staticBackDrop" + name);
    const modalBackdrops = document.querySelectorAll(".modal-backdrop"); //retrieves all elements that match specified css selector (className)

    modalBackdrops.forEach((modalBackdrop) => {
      modalBackdrop.remove(); //stream that deletes each element
    });
    navigate("/home");
  };

  return (
    <NavigationContext.Provider value={handleCloseModal}>
      {children}
    </NavigationContext.Provider>
  );
};

//in order to provide functions down to components, we need to wrap the parent with the provider ^^

export const useNavigationContext = () => {
  //in order to use the context, ie the function, I need to containerize this useNavigationContext like const handleModal = useNavigationContext. Then do handleModal("argument") to use the context function correctly
  const navigate = useContext(NavigationContext);
  if (!navigate) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return navigate;
};

NavigationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavigationProvider;
