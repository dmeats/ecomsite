import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from '@material-ui/core/ExpansionPanel';
import AccordionSummary from '@material-ui/core/ExpansionPanelSummary';
import AccordionDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import FilterList from './FilterList'


const MyAccordion =(props)=> {
    const useStyles = makeStyles((theme) => ({
        root: {
          width: "100%",
          background: "rgb(98, 62, 21)",
          color: "white",
          position: "relative"
        },
        rootExpanded: {
          background: "rgb(98, 62, 21)",
          flexGrow: .3,
          color: "white",
          position: "relative"
        }
      }));

      const classes = useStyles();
  const { name,list } = props;
  const [expanded, setExpanded] = useState(false);

  //toggle the filter to expand or close
  const rootClass = expanded ? classes.rootExpanded : classes.root;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      className={rootClass}
      expanded={expanded === name}
      onChange={handleChange(name)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id={`${name}-header`}
      >
        <Typography className={classes.heading}>{name}</Typography>
        
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          
            <FilterList li={list} nm={name}/>
         
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
   
}

export default MyAccordion
