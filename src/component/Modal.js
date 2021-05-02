// import React, { Component } from "react";
// import { ProductConsumer } from "../context";
// import { Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";
// import styled from "styled-components";

// export default class Modal extends Component {
//   render() {
//     return (
//       <ProductConsumer>
//         {(value) => {
//           const { modalOpen, closeModal } = value;
//           const { img, title, price } = value.modalProduct;

//           if (!modalOpen) {
//             return null;
//           } else {
//             return (
//               <ModalContainer>
//                 <div className="card">
//                   <img src={img} className="card-img-top" alt="..." />
//                   <div className="card-body">
//                     <h5 className="card-title">{title}</h5>
//                     <h5 className="card-text">price : ${price}</h5>
//                     <Link to="/" className="card-link">
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => closeModal()}
//                       >
//                         Continue shopping
//                       </Button>
//                     </Link>
//                     <Link to="/cart" className="card-link">
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => closeModal()}
//                       >
//                         Go to cart
//                       </Button>
//                     </Link>
//                   </div>
//                 </div>
//               </ModalContainer>
//             );
//           }
//         }}
//       </ProductConsumer>
//     );
//   }
// }

// const ModalContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(0, 0, 0, 0.3);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   #modal {
//     background: var(--mainWhite);
//   }
// `;
import React, { Component } from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <>
                <ModalContainer>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={img}
                      className="card-img-top"
                      alt="product image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{price}</p>

                      <div class="card-body">
                        <Link to="/" className="card-link">
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => closeModal()}
                          >
                            Continue shopping
                          </Button>
                        </Link>
                        <Link to="/cart" className="card-link">
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => closeModal()}
                          >
                            Go to cart
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ModalContainer>
              </>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

{
  /* <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a> */
}
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
