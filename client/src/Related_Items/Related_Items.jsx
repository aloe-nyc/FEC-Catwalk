import React from "react";
import config from "./../../../config.js";
import Card from "./Card";
import {
  getProductImage,
  getProductRating,
  getRelatedProducts,
} from "./../shared/getQueryData.jsx";
import { instanceOf } from "prop-types";
import { withCookies, Cookies, CookiesProvider } from "react-cookie";

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductsList: [],
      relatedListEndIdx: 3,
      myOutfitList: this.props.cookies.get("myOutfitList") || [],
      outfitListEndIdx: 2,
    };
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
    this.getProductImage = getProductImage.bind(this);
    this.getProductRating = getProductRating.bind(this);
    this.getRelatedProducts = getRelatedProducts.bind(this);
    this.addIdx = this.addIdx.bind(this);
    this.subtractIdx = this.subtractIdx.bind(this);
    this.addIdxButton = this.addIdxButton.bind(this);
    this.subtractIdxButton = this.subtractIdxButton.bind(this);
    this.handleCookie = this.handleCookie.bind(this);
  }

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  handleCookie = (newOutfitList) => {
    const { cookies } = this.props;
    cookies.set("myOutfitList", newOutfitList, { path: "/" });
    this.setState({ myOutfitList: cookies.get("myOutfitList") });
  };

  componentDidMount() {
    console.log(this.props.productID);
    this.getRelatedProducts(this.props.productID);
  }

  addToOutfit() {
    // TODO: Write logic to make sure outfit ID's are unique.
    if (!this.state.myOutfitList.includes(this.props.productID)) {
      let newOutfitList = [...this.state.myOutfitList, this.props.productID];
      this.setState({ myOutfitList: newOutfitList });
      this.handleCookie(newOutfitList);
    }
  }

  removeFromOutfit(removeID) {
    let origArray = this.state.myOutfitList;
    let newArray = origArray.filter((item) => item !== removeID);
    this.setState({ myOutfitList: newArray });
    if (this.state.outfitListEndIdx > 2) {
      this.setState({ outfitListEndIdx: this.state.outfitListEndIdx - 1 });
    }
    this.handleCookie(newArray);
  }

  addIdx(e) {
    if (e.target.className.includes("related")) {
      if (
        this.state.relatedListEndIdx < this.state.relatedProductsList.length
      ) {
        this.setState({ relatedListEndIdx: this.state.relatedListEndIdx + 1 });
      }
    } else if (e.target.className.includes("outfit")) {
      if (this.state.outfitListEndIdx < this.state.myOutfitList.length) {
        this.setState({ outfitListEndIdx: this.state.outfitListEndIdx + 1 });
      }
    }
  }

  subtractIdx(e) {
    let temp;
    if (e.target.className.includes("related")) {
      if (this.state.relatedListEndIdx > 3) {
        this.setState({ relatedListEndIdx: this.state.relatedListEndIdx - 1 });
      }
    } else if (e.target.className.includes("outfit")) {
      if (this.state.outfitListEndIdx > 2) {
        this.setState({ outfitListEndIdx: this.state.outfitListEndIdx - 1 });
      }
    }
  }

  addIdxButton(list) {
    if (list === "related") {
      if (this.state.relatedProductsList.length > 3) {
        if (
          this.state.relatedListEndIdx < this.state.relatedProductsList.length
        ) {
          return (
            <p className="carousel-control related" onClick={this.addIdx}>
              ❯
            </p>
          );
        } else {
          return null;
        }
      }
    } else if (list === "outfit") {
      if (this.state.myOutfitList.length > 2) {
        if (this.state.outfitListEndIdx < this.state.myOutfitList.length) {
          return (
            <p className="carousel-control outfit" onClick={this.addIdx}>
              ❯
            </p>
          );
        } else {
          return null;
        }
      }
    }
  }

  subtractIdxButton(list) {
    if (list === "related") {
      if (this.state.relatedListEndIdx > 3) {
        return (
          <p className="carousel-control related" onClick={this.subtractIdx}>
            ❮
          </p>
        );
      } else {
        return null;
      }
    } else if (list === "outfit") {
      if (this.state.outfitListEndIdx > 2) {
        return (
          <p className="carousel-control outfit" onClick={this.subtractIdx}>
            ❮
          </p>
        );
      } else {
        return null;
      }
    }
  }

  render() {
    let slicedRelated = this.state.relatedProductsList.slice(
      this.state.relatedListEndIdx - 3,
      this.state.relatedListEndIdx
    );
    let slicedOutfit;
    if (this.state.myOutfitList.length > 2) {
      slicedOutfit = this.state.myOutfitList.slice(
        this.state.outfitListEndIdx - 2,
        this.state.outfitListEndIdx
      );
    } else {
      slicedOutfit = this.state.myOutfitList;
    }
    return (
      <CookiesProvider>
        <br></br>
        <div className="rrtitle">RELATED PRODUCTS</div>
        <div id="related-items">
          <div className="carousel-control">
            {this.subtractIdxButton("related")}
          </div>
          {slicedRelated.map((product) => {
            return (
              <div>
                <Card
                  key={product}
                  productName={this.props.productName}
                  getRelatedProducts={this.getRelatedProducts}
                  productID={product}
                  productFeatures={this.props.productFeatures}
                  changeState={this.props.changeState}
                  outfitCard={false}
                />
              </div>
            );
          })}
          <div className="carousel-control">{this.addIdxButton("related")}</div>
        </div>
        <div className="rrtitle">YOUR OUTFIT</div>
        <div id="my-outfit">
          <div className="carousel-control">
            {this.subtractIdxButton("outfit")}
          </div>
          <div className="card outfit-item">
            <p className="plus" onClick={this.addToOutfit}>
              +
            </p>
          </div>
          {slicedOutfit.map((outfitID) => {
            return (
              <Card
                // TODO: Refactor Card so that it can be used for both related products and outfit cards
                key={outfitID}
                getRelatedProducts={this.getRelatedProducts}
                productID={outfitID}
                productFeatures={this.props.productFeatures}
                changeState={this.props.changeState}
                outfitCard={true}
                removeFromOutfit={this.removeFromOutfit}
              />
            );
          })}
          <div className="carousel-control">{this.addIdxButton("outfit")}</div>
        </div>
      </CookiesProvider>
    );
  }
}

export default withCookies(RelatedItems);
