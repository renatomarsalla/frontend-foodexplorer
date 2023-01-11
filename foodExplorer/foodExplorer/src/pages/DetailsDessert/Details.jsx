import { Container } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { ButtonText } from '../../components/Buttontext';

import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../service/api';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

let avatar = `${api.defaults.baseURL}/files`;

function DetailsDessert() {
  const [data, setData] = useState('');
  const [listIngredients, setListIngredients] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

  const navigate = useNavigate();

  const { user } = useAuth();

  function home() {
    navigate('/');
  }

  function handleAddItem() {
    setQuantity(quantity + 1);
  }

  function handleRemoveItem() {
    setQuantity(quantity - 1);

    if (quantity == 1) {
      setQuantity(1);
    }
  }

  let total;
  async function handleCreateOrder(name, price, quantities, total, image) {
    let p = Number(price.replace(',', '.')).toFixed(2);

    total = (p * quantity).toFixed(2);
    // alert(total);

    // alert(`${name} ${price} ${quantity} ${total} ${image}`);
    await api.post(`/order/${user.id}`, {
      name,
      price,
      quantity,
      total,
      image
    });

    alert('pedido realizado');
    window.location.reload(true);

    // handleAddUnits();
  }

  useEffect(() => {
    async function fetchDetails() {
      const response = await api.get(`/dessertsUser/${params.id}`);
      // console.log(response.data);
      setData(response.data);
    }

    fetchDetails();
  }, [data]);

  useEffect(() => {
    async function fetchListIngredients() {
      const response = await api.get(`/dessertsUser/${params.id}`);
      const filter = response.data.ingredients.map(ing => ing.ingredients);

      let items, item;
      for (item of filter) {
        items = item;
      }
      const eachItem = items.split(',');
      setListIngredients(eachItem);
    }

    fetchListIngredients();
  }, [listIngredients]);

  return (
    <Container>
      <Header />
      <div className="page">
        <div className="return">
          <Button text="Voltar" icon={MdKeyboardArrowLeft} onClick={home} />
        </div>

        {data && (
          <main>
            <div className="dish">
              <img src={`${avatar}/${data.image}`} alt="dish selected" />
            </div>
            <div className="dishesIngredientsAndPrices">
              <div className="infos">
                <h1>{data.name}</h1>
                <span>{data.description}</span>
              </div>

              <div className="ingredientsTitle">
                <span>Ingredientes:</span>
              </div>
              <div className="ingredients">
                {listIngredients &&
                  listIngredients.map((ing, index) => (
                    <label key={String(index)}>{ing}</label>
                  ))}
              </div>

              <div className="priceAndUnits">
                <span className="price">R$ {data.price.replace('.', ',')}</span>
                <div className="units">
                  <ButtonText
                    text="-"
                    className="decrement"
                    onClick={handleRemoveItem}
                  />
                  <span>{quantity}</span>
                  <ButtonText
                    text="+"
                    className="increment"
                    onClick={handleAddItem}
                  />
                  <Button
                    text="incluir"
                    icon={MdOutlineProductionQuantityLimits}
                    onClick={() =>
                      handleCreateOrder(
                        data.name,
                        data.price,
                        quantity,
                        total,
                        data.image
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </main>
        )}
      </div>
      <Footer />
    </Container>
  );
}

export { DetailsDessert };
