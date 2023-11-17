import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/ProductUpdate/index.css";

function ProductUpdate() {
  const {
    searchProductInfo,
    setSearchProductInfo,
    setUpdateProduct,
    setDeleteProduct,
  } = useContext(AppContext);

  const [inputValue, setInputValue] = useState(searchProductInfo);
  const [showModal, setShowModal] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();

    const searchValueName = e.target.name.value;
    const searchValueIngredient = e.target.ingredient.value;
    const searchValueQuantity = Number(e.target.quantity.value);
    const searchValueEnergetic = Number(e.target.energetic.value);
    const searchValueProtein = e.target.protein.value;
    const searchValueCarb = e.target.carb.value;
    const searchValueFat = e.target.fat.value;
    const searchValueSodium = e.target.sodium.value;

    const newSearchProductInfo = searchProductInfo;
    newSearchProductInfo.name = searchValueName;
    newSearchProductInfo.ingredient = searchValueIngredient;
    newSearchProductInfo.quantity = searchValueQuantity;
    newSearchProductInfo.energetic = searchValueEnergetic;
    newSearchProductInfo.protein = searchValueProtein;
    newSearchProductInfo.carb = searchValueCarb;
    newSearchProductInfo.fat = searchValueFat;
    newSearchProductInfo.sodium = searchValueSodium;

    setSearchProductInfo(newSearchProductInfo);
    setUpdateProduct(searchProductInfo.id);

    alert("Produto atualizado")
    setInputValue({
      name: "",
      ingredient: "",
      quantity: "",
      energetic: "",
      protein: "",
      carb: "",
      fat: "",
      sodium: "",
      cod_barras: "",
    });
  };

  const handleDelete = () => {
    setDeleteProduct(Math.random())
    setShowModal(!showModal)

    setInputValue({
      name: "",
      ingredient: "",
      quantity: "",
      energetic: "",
      protein: "",
      carb: "",
      fat: "",
      sodium: "",
      cod_barras: "",
    });

    alert('Produto excluído!')
  };

  return (
    <>
      <section className="login header">
        <h1>Editar Produto</h1>
        <div className="img_block">
          <img src="/photo.png" alt="" className="img_logo" />
        </div>
        <form onSubmit={(e) => handleUpdate(e)} action="" method="post">
          <div className="form">
            <label htmlFor="" className="form_label">
              *Código de Barras
              <input
                required
                type="number"
                name=""
                id="cod_barras"
                value={searchProductInfo && searchProductInfo.cod_barras}
                className="input_form disabled"
              />
            </label>
            <label htmlFor="" className="form_label">
              *Nome
              <input
                required
                type="text"
                name=""
                id="name"
                value={inputValue?.name}
                onChange={(e) =>
                  setInputValue({ ...inputValue, name: e.target.value })
                }
                className="input_form"
              />
            </label>
            <label htmlFor="" className="form_label">
              *Ingredientes
              <textarea
                required
                id="ingredient"
                value={inputValue?.ingredient}
                onChange={(e) =>
                  setInputValue({ ...inputValue, ingredient: e.target.value })
                }
                name=""
              />
            </label>
            <label htmlFor="" className="form_label">
              *Quantidade
              <input
                required
                type="number"
                name=""
                id="quantity"
                value={inputValue?.quantity}
                onChange={(e) =>
                  setInputValue({ ...inputValue, quantity: e.target.value })
                }
                className="input_form"
              />
            </label>
            <label htmlFor="" className="form_label">
              *Valor energético
              <input
                required
                type="number"
                name=""
                id="energetic"
                value={inputValue?.energetic}
                onChange={(e) =>
                  setInputValue({ ...inputValue, energetic: e.target.value })
                }
                className="input_form"
              />
            </label>
            <label htmlFor="" className="form_label">
              *Proteína
              <input
                required
                type="text"
                name=""
                id="protein"
                value={inputValue?.protein}
                onChange={(e) =>
                  setInputValue({ ...inputValue, protein: e.target.value })
                }
                className="input_form"
              />
            </label>
            <label htmlFor="" className="form_label">
              *Carboidrato
              <input
                required
                type="text"
                name=""
                id="carb"
                value={inputValue?.carb}
                onChange={(e) =>
                  setInputValue({ ...inputValue, carb: e.target.value })
                }
                className="input_form"
              />
            </label>
            <label htmlFor="" className="form_label">
              *Gorduras totais
              <input
                required
                type="text"
                name=""
                id="fat"
                value={inputValue?.fat}
                onChange={(e) =>
                  setInputValue({ ...inputValue, fat: e.target.value })
                }
                className="input_form"
              />
            </label>
            <label htmlFor="" className="form_label">
              *Sódio
              <input
                required
                type="text"
                name=""
                id="sodium"
                value={inputValue?.sodium}
                onChange={(e) =>
                  setInputValue({ ...inputValue, sodium: e.target.value })
                }
                className="input_form"
              />
            </label>
          </div>
          <div className="button_container">
            <button className="button_default save_button">Salvar</button>
          </div>
        </form>
        <button
          className="button_default delete_button"
          onClick={() => setShowModal(!showModal)}
        >
          Excluir
        </button>
      </section>

      {showModal ? (
        <section className="modal">
          <div className="alert">
            <img src="/icons/warning.png" alt="warning" />
            <p>Deseja excluir este produto?</p>
          </div>
          <div className="button_container">
            <button
              className="button_default delete_button"
              onClick={() => handleDelete()}
            >
              Sim
            </button>
            <button
              className="button_default add_button"
              onClick={() => setShowModal(!showModal)}
            >
              Não
            </button>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default ProductUpdate;
