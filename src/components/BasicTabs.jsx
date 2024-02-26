import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BasicTable from "./BasicTable";
import Loading from "./Loading";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
//      *****************************************************************************************************
export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [rowsUsers, setRowsUsers] = useState([]);
  const [tableCell, settableCell] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getUser = async () => {
    setIsLoading(true);
    settableCell({
      cellone: "Name",
      celltwo: "Age",
      cellthree: "Email",
      cellfour: "Number",
      cellfive: "User Id",
    });
    try {
      const responce = await fetch("https://dummyjson.com/users");
      const data = await responce.json();
      const rowsUsers = data.users.map((user) => ({
        id: user.id,
        title: user.firstName,
        tableone: user.age,
        tabletwo: user.email,
        tablethree: user.phone,
        tablefour: user.username,
      }));
      setRowsUsers(rowsUsers);
      setIsLoading(false);
    } catch (error) {
      console.log("Getting error from api for user data ", error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  // for getting all products
  const getProducts = async () => {
    setIsLoading(true);
    settableCell({
      cellone: "Mobile",
      celltwo: "Brand",
      cellthree: "Price",
      cellfour: "Discount",
      cellfive: "Rating",
    });
    try {
      const responce = await fetch("https://dummyjson.com/products");
      const data = await responce.json();
      const rowsProducts = data.products.map((product) => ({
        id: product.id,
        title: product.title,
        tableone: product.brand,
        tabletwo: product.price,
        tablethree: product.discountPercentage,
        tablefour: product.rating,
      }));
      setRowsUsers(rowsProducts);
      setIsLoading(false);
    } catch (error) {
      console.log("Getting error from api for products ", error);
    }
  };

  const getRecepies = async () => {
    setIsLoading(true);
    settableCell({
      cellone: "Food",
      celltwo: "Prepare Time",
      cellthree: "Cook Time",
      cellfour: "Difficulty",
      cellfive: "Cuisine",
    });
    try {
      const responce = await fetch("https://dummyjson.com/recipes");
      const data = await responce.json();
      const rowsProducts = data.recipes.map((recipe) => ({
        id: recipe.id,
        title: recipe.name,
        tableone: `${recipe.prepTimeMinutes} min`,
        tabletwo: `${recipe.cookTimeMinutes} min`,
        tablethree: recipe.difficulty,
        tablefour: recipe.cuisine,
      }));
      setRowsUsers(rowsProducts);
      setIsLoading(false);
    } catch (error) {
      console.log("Getting error from api for products ", error);
    }
  };

  return (
    <Box sx={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ background: "gray" }}
        >
          <Tab
            onClick={getUser}
            sx={{ color: "white" }}
            label="Users"
            {...a11yProps(0)}
          />
          <Tab
            onClick={getProducts}
            sx={{ color: "white" }}
            label="Products"
            {...a11yProps(1)}
          />
          <Tab
            onClick={getRecepies}
            sx={{ color: "white" }}
            label="Item Three"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {isLoading ? (
          <Loading />
        ) : (
          <BasicTable tableCell={tableCell} rows={rowsUsers} />
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {isLoading ? (
          <Loading />
        ) : (
          <BasicTable tableCell={tableCell} rows={rowsUsers} />
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {isLoading ? (
          <Loading />
        ) : (
          <BasicTable tableCell={tableCell} rows={rowsUsers} />
        )}
      </CustomTabPanel>
    </Box>
  );
}
