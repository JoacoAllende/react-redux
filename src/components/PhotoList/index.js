import React from "react";
import { connect } from "react-redux";
import { getPhotos } from "../../actions";

class PhotoList extends React.Component {
  componentDidMount() {
    this.props.getPhotos();
  }
  render() {
    return (
      <div className="ui small images">
        {this.props.photos.map(({ id, url, title }) => {
          return <img alt={title} src={url} key={id} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { photos: state.photos.photosList };
};

const mapDispatchToProps = (dispatch) => ({
  getPhotos: () => dispatch(getPhotos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);
