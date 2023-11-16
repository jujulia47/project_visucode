import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext({} as any);

export const AppProvider = ({ children }: any) => {
  const [page, setPage] = useState("bemVindo");
  const [isAdmin, setIsAdmin] = useState(false);
  //email login
  const [email, setEmail] = useState();

  // crud user
  const [updateUser, setUpdateUser] = useState(null);
  const [createUser, setCreateUser] = useState(null);
  const [searchUser, setSearchUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);

  //crud product
  const [updateProduct, setUpdateProduct] = useState(null);
  const [createProduct, setCreateProduct] = useState(null);
  const [searchProduct, setSearchProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);

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
  } as {
    "id"?: String | null,
    "name": String,
		"ingredient": String,
		"quantity": Number,
		"energetic": Number,
		"protein": String,
		"carb": String,
		"fat": String,
		"sodium": String,
		"cod_barras": Number,
  });

  const [searchUserInfo, setSearchUserInfo] = useState({
		"id": null,
    "name": "",
    "email": null,
    "password": "",
    "isAdmin": true,
    "created_at": ""
  });

  const [logedUserInfo, setlogedUserInfo] = useState({
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

    console.log("searchValue__email", email);
    
    if(email) {
      fetch(`http://localhost:3333/user/${email}`, options)
        .then(response => response.json())
        .then(response => {
          // setSearchUserInfo(response)
          console.log("response___", response);
          
          setlogedUserInfo(response)
          setSearchUserInfo(response)
          setIsAdmin(response.isAdmin)
          setSearchUser(null)
        })
        .catch(err => console.error("response__err", err));
    }
  }, [email])


  useEffect(() => {
    const options = {method: 'GET'};

    console.log("searchValue__email", email);
    
    if(searchUser) {
      fetch(`http://localhost:3333/user/${searchUser}`, options)
        .then(response => response.json())
        .then(response => {
          // setSearchUserInfo(response)
          console.log("response___", response);
          
          setSearchUserInfo(response)
          setIsAdmin(response.isAdmin)
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

    console.log("annn_", searchUserInfo);
    

    if(updateUser && searchUserInfo.id) {
      fetch(`http://localhost:3333/user/id/${searchUserInfo.id}`, options)
        .then(response => response.json())
        .then(response => {
          console.log("response__put", response)
          // setSearchUserInfo({
          //   "id": null,
          //   "name": "",
          //   "email": null,
          //   "password": "",
          //   "isAdmin": true,
          //   "created_at": ""
          // })

          setUpdateUser(null)

          window.alert("atualizou, eu acho")
        })
        .catch(err => console.error("response__err", err));
    }
  }, [updateUser])

  useEffect(() => {
    const options = {method: 'DELETE'};

    console.log('Delete', searchUserInfo);
    
    if(searchUserInfo?.id) {
      fetch(`http://localhost:3333/user/id/${searchUserInfo.id}`, options)
        .then(response => response.json())
        .then(response => {
          setSearchProductInfo(response)
          setSearchProduct(null)
        })
        .catch(err => console.error("response__err", err));
    }
  }, [deleteUser])


  //email login
  // useEffect(() => {
  //   const options = {method: 'GET'};
    
  //   if(email) {
  //     fetch(`http://localhost:3333/user/${email}`, options)
  //       .then(response => response.json())
  //       .then(response => {
  //         console.log("response__", response)
  //         setIsAdmin(response.isAdmin)
  //       })
  //       .catch(err => console.error("response__err", err));
  //   }
  // }, [email])

  //REQUISIÇÕES PRODUTO

  useEffect(() => {
    const options = {method: 'GET'};

    console.log('??', searchProductInfo);
    
    if(searchProduct && searchProductInfo.cod_barras) {
      fetch(`http://localhost:3333/product/${searchProductInfo.cod_barras}`, options)
        .then(response => response.json())
        .then(response => {
          console.log("response___", response);
          
          setSearchProductInfo(response)
          setPage("productUpdate");
          setSearchProduct(null)
        })
        .catch(err => console.error("response__err", err));
    }
  }, [searchProduct])

  useEffect(() => {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/2023.5.8'},
      body: JSON.stringify(searchProductInfo)
    };
    console.log("options_", options);

    if(createProduct && searchProductInfo.cod_barras) {
      fetch('http://localhost:3333/product', options)
        .then(response => response.json())
        .then(response => {
          console.log(response)
            setSearchProductInfo({
              "id":null,
              "name": "",
              "ingredient": "",
              "quantity": 1,
              "energetic": 1,
              "protein": "",
              "carb": "",
              "fat": "",
              "sodium": "",
              "cod_barras": 0,
            })

            setCreateProduct(null)
  
            window.alert("Novo cadastro, eu acho")
        })
        .catch(err => console.error(err));
    }
  }, [createProduct])

  useEffect(() => {
    const options = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/2023.5.8'},
      body: JSON.stringify(searchProductInfo)
      
    };

    console.log("updateProduct", updateProduct);
    
    if(updateProduct) {
      fetch(`http://localhost:3333/product/id/${updateProduct}`, options)
        .then(response => response.json())
        .then(response => {
          setUpdateProduct(null)

          window.alert("atualizou, eu acho")
        })
        .catch(err => console.error("response", err));
    }
  }, [updateProduct])

  useEffect(() => {
    const options = {method: 'DELETE'};

    console.log('Delete', searchProductInfo);
    
    if(searchProductInfo?.id) {
      fetch(`http://localhost:3333/product/id/${searchProductInfo.id}`, options)
        .then(response => response.json())
        .then(response => {
          setSearchProductInfo(response)
          setSearchProduct(null)
        })
        .catch(err => console.error("response__err", err));
    }
  }, [deleteProduct])

  return (
    <AppContext.Provider
      value={{
        page,
        setPage,
        isAdmin,
        email, 
        setEmail,

        setUpdateUser,
        setCreateUser,
        setSearchUser,
        setDeleteUser,

        setUpdateProduct,
        setCreateProduct,
        setSearchProduct,
        setDeleteProduct,

        searchProductInfo,
        setSearchProductInfo,

        searchUserInfo, 
        setSearchUserInfo,

        logedUserInfo, 
        setlogedUserInfo
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
