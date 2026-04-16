
import { useContext,useEffect }             from "react";
import GlobalContext                        from "../_context/GlobalContext";
 
//import "./resetMenuTitle.css";
 
const ResetMenuTitle = (Component, myTitle) => {
                                                //const { menuTitle, setMenuTitle } = useContext(GlobalContext);

                                                //console.log("In ResetMenuTitle, the default menuTitle="+ `${menuTitle}` );

                                                //setMenuTitle('Study myTitle');

                                                //console.log("In ResetMenuTitle, After reset menuTitle, the default menuTitle="+ `${menuTitle}` );


                                                 
                                                // useEffect( () => {setMenuTitle({myTitle});}, []);
              
                                                   

                                                  return (props) => {
    
                                                                        return ( 
                                                                                <div>
                                                                                      
                                                                                     <Component {...props} />

                                                                                </div>
                                                                                );
                                                                      };
                                                 };

export default ResetMenuTitle ;