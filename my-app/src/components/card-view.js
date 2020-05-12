import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import ShareIcon from "@material-ui/icons/Share";
import EditIcon from "@material-ui/icons/Edit";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import logo from "../icons/architecture-and-city.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CardView({ item }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} style={{ margin: "20px", width: "300px" }}>
      <CardHeader title={item.category} subheader={item.subcategory} />
      <CardMedia className={classes.media} image={logo} title={item.name} />
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="h1">
          5. {item.nameFive}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.descriptionFive}
        </Typography>
        <Typography variant="body1" color="textPrimary" component="h1">
          4. {item.nameFour}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.descriptionFour}
        </Typography>
        <Typography variant="body1" color="textPrimary" component="h1">
          3. {item.nameThree}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.descriptionThree}
        </Typography>
        <Typography variant="body1" color="textPrimary" component="h1">
          2. {item.nameTwo}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.descriptionTwo}
        </Typography>
        <Typography variant="body1" color="textPrimary" component="h1">
          1. {item.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <EditIcon />
        </IconButton>

        <IconButton
          className={classes.expand}
          // onClick={handleExpandClick}
          // aria-expanded={expanded}
          aria-label="show more"
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
