import React, { useState, useEffect } from "react";
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import CreateItemButton from "./components/Button";
import SidePanel from "../../../../components/side-panel";
import TextInput from "../../../../components/inputs/text-input";
// import Checkbox from "../../../../components/inputs/checkbox";
import Button from "../../../../components/buttons/button";

import SaveBranch from "./components/saveBranch"
import CatalogItems from "./components/catalogItems"

import {ReactComponent as Inventory} from "../../../../assets/svgs/inventory.svg";
import {ReactComponent as Plus} from "../../../../assets/svgs/plus2.svg";
import {ReactComponent as Save} from "../../../../assets/svgs/save-menu.svg";
import save from "../../../../assets/svgs/save.svg";

import {ReactComponent as Arrow} from "../../../../assets/svgs/arrow2.svg";

import "./style.css"

function DashSidebar(props) {

	const [menu, setMenu] = useState({});
  const [panelTitle, setPanelTitle] = useState("Create Role");
  const [showSidePanel, setShowSidePanel] = useState(false);
  
  const [showText, setShowText] = useState(false);

  const [save, setSave] = useState(false);
  
  // const [panelTitle, setPanelTitle] = useState("Create Role");

  const saveMenu = () => {
		//TODO: upload employee to the server, then update employee list from server

		//get a new Employee to be ready
		setMenu({});
		//hide panel
		setShowSidePanel(false);
	};

  const [show, setShow] = useState(false);

  // useEffect(() => {
  //     if(visible) {
  //         setShow(true);
  //     } else {
  //         const timeout = setTimeout(() => {
  //             setShow(false);
  //         }, 500)
  //         return () => {clearTimeout(timeout)};
  //     }
  // }, [visible])

  // console.log(props.show)

  const showSave = () => {
        // if(show)(
        //   setShow(true);
        //   console.log("hay");
        // )else{
        //   setShow(false);
        //   console.log("fuck");
        // }

        if(save) {
          setSave(false);
          console.log("a");
        } else {
          setSave(true);
          console.log("a");
        }

    };

  const showCatalogText = () => {
        if(showText) {
            setShowText(false);
        } else {
            setShowText(true);
        }
        // console.log(showText)
    };


  const useStyles = makeStyles({
    root: {

    },
    label: {
      fontSize: "calc(15px + 1vw)",
      paddingRight:"1em"
    },
  });
  const classes = useStyles();
  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 65,
      height: 35,
      padding: 0,
      margin: theme.spacing(1),
      display: "flex",
      justifyContent: "space-between"
    },
    switchBase: {
      color:"#C4C4C4",
      padding: 1,
      '&$checked': {
        transform: 'translateX(32px)',
        color: "#C4C4C4",
        '& + $track': {
          backgroundColor: '#001d53',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#001d53',
        border: '6px solid #C4C4C4',
      },
    },
    thumb: {
      width: 32,
      height: 32,
    },
    track: {
      borderRadius: 32 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        size="medium"
        {...props}
      />
    );
  });

    const [state, setState] = React.useState({
      checkedB: false,
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

  return (
    <aside className="dash-siba">
      <span className="dash-siba-head">
      <span className="siba-header-user-title">MENUMANAGER</span>
      <div className="dash-siba-menu">
            <h3> 
              <button className="content-span" > <Inventory  alt="" className="inventory-icon" /> Inventory </button> 
              <span 
                style={{    
                  display: "flex"
                }}> 
                <CreateItemButton
                  text="Add Inventory"
                  onClick={() => {
                    setPanelTitle("Add Inventory");
                    setShowSidePanel(true);
                  }}
                  className="plus-icon"
                /> 
              </span> 
            </h3>      
            <h3> 
              <button className="content-span"    
              onClick={showCatalogText}
              >               
                <Inventory  alt="" className="inventory-icon"  /> 
                Catalog 
                
              </button> 
              <span 
                style={{    
                  display: "flex"
                }}> 
                <CreateItemButton
                  text="Add Menu"
                  onClick={() => {
                    setPanelTitle("Add Menu");
                    setShowSidePanel(true);
                  }}
                  className="plus-icon"
                /> 
              </span> 
            </h3>      
            <hr className="hr"/>

      </div>
      <CatalogItems className="content-span" 
              // onClick={showCatalogText
              title={panelTitle}
              visible={showText}
              setVisibility={setShowText}
              // show={parseFloat(showText)}
              > 
      </CatalogItems>
      <SidePanel
				title={panelTitle}
				visible={showSidePanel}
				setVisibility={setShowSidePanel}
			>
				<TextInput
					className="mx-5 my-1"
					value={menu.name ? menu.name : ""}
					setValue={(val) => {
						setMenu({ ...menu, name: val });
					}}
					placeholder="Name"
				/>
        <h4 className="mt-5 mx-5 mb-5">
				  {/* Default : */}
          <FormControlLabel
            control={
              <IOSSwitch size="large" checked={state.checkedB} onChange={handleChange} name="checkedB" />
            }
            label="Default"
            labelPlacement="start"
            classes={{
              label: classes.label,
            }}
      />
        </h4>			
				<div className="mt-auto mx-5 mb-5">
          {/* <Button onClick={saveMenu}>
              <img className="mr-3" src={save} alt="save" /> Save
          </Button>				 */}
          {/* <Save className="save-button"/> */}
          <SaveBranch
            visible={save}
            setVisibility={setSave}
          />

          <button className="save-button"    
          onClick={showSave}
          >         
          <p>Save</p> 

          <div className={`arrow-div `}>
            <Arrow alt="" className={`arrow-icon ${save?"up":""}`} />
          </div>
          
          </button>          
				</div>
			</SidePanel>
      </span>
    </aside>
  );
}

export default DashSidebar;
