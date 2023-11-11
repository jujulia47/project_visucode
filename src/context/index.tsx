import React, { createContext, useContext, useState, useEffect } from "react";

export const AppContext = createContext({} as any);

export const AppProvider = ({ children }: any) => {
  const [page, setPage] = useState("bemVindo");
  const [isAdmin, setIsAdmin] = useState(false);
  //email login
  const [email, setEmail] = useState();

  // crud user
  const [udateUser, setUpdateUser] = useState(null);
  const [createUser, setCreateUser] = useState(null);
  const [searchUser, setSearchUser] = useState(null);

  //crud product
  const [udateProduct, setUpdateProduct] = useState(null);
  const [createProduct, setCreateProduct] = useState(null);
  const [searchProduct, setSearchProduct] = useState(null);

  const [searchProductInfo, setSearchProductInfo] = useState({
    "name": "",
		"ingredient": "",
		"quantity": 1,
		"energetic": 1,
		"protein": "",
		"carb": "",
		"fat": "",
		"sodium": "",
		"cod_barras": 0,
  });

  const [searchUserInfo, setSearchUserInfo] = useState({
		"id": null,
    "name": "",
    "email": null,
    "password": "",
    "isAdmin": true,
    "created_at": ""
  });

  //REQUISIÇÕES USER
  
  useEffect(() => {
    const options = {method: 'GET'};
    
    if(searchUser && searchUserInfo.email) {
      fetch(`http://localhost:3333/user/${searchUserInfo.email}`, options)
        .then(response => response.json())
        .then(response => {
          setSearchUserInfo(response)
          setSearchUser(null)
        })
        .catch(err => console.error("response__err", err));
    }
  }, [searchUser])

  useEffect(() => {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/2023.5.8'},
      body: JSON.stringify(searchUserInfo)
    };
    console.log("options_", options);

    if(createUser && searchUserInfo.email) {
      fetch('http://localhost:3333/user', options)
        .then(response => response.json())
        .then(response => {
          console.log(response)
            setSearchUserInfo({
              "id": null,
              "name": "",
              "email": null,
              "password": "",
              "isAdmin": true,
              "created_at": ""
            })

            setCreateUser(null)
  
            window.alert("Novo cadastro, eu acho")
        })
        .catch(err => console.error(err));
    }
  }, [createUser])

  useEffect(() => {
    const options = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/2023.5.8'},
      body: JSON.stringify(searchUserInfo)
    };

    if(udateUser && searchUserInfo.id) {
      fetch(`http://localhost:3333/user/id/${searchUserInfo.id}`, options)
        .then(response => response.json())
        .then(response => {
          console.log("response__put", response)
          setSearchUserInfo({
            "id": null,
            "name": "",
            "email": null,
            "password": "",
            "isAdmin": true,
            "created_at": ""
          })

          setUpdateUser(null)

          window.alert("atualizou, eu acho")
        })
        .catch(err => console.error("response__err", err));
    }
  }, [udateUser])


  //email login
  useEffect(() => {
    const options = {method: 'GET'};
    
    if(email) {
      fetch(`http://localhost:3333/user/${email}`, options)
        .then(response => response.json())
        .then(response => {
          console.log("response__", response)
          setIsAdmin(response.isAdmin)
        })
        .catch(err => console.error("response__err", err));
    }
  }, [email])

  //REQUISIÇÕES PRODUTO

  useEffect(() => {
    const options = {method: 'GET'};

    console.log('??', searchProductInfo.cod_barras);
    
    if(searchProduct && searchProductInfo.cod_barras) {
      fetch(`http://localhost:3333/product/${searchProductInfo.cod_barras}`, options)
        .then(response => response.json())
        .then(response => {
          setSearchProductInfo(response)
          setSearchProduct(null)
        })
        .catch(err => console.error("response__err", err));
    }
  }, [searchProduct])

  return (
    <AppContext.Provider
      value={{
        page,
        setPage,
        isAdmin,
        searchProductInfo,
        setSearchProductInfo,
        setUpdateProduct,
        setCreateProduct,
        setSearchProduct,
        searchUserInfo, 
        setSearchUserInfo,
        email, 
        setEmail,
        setUpdateUser,
        setCreateUser,
        setSearchUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
