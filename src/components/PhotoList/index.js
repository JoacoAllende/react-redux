import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPhotos } from "../../actions";

function PhotoList(props) {
  useEffect(() => {
    props.getPhotos();
  }, []);

  return (
    <div className="ui small images">
      {props.photos.map(({ id, url, title }) => {
        return <img alt={title} src={url} key={id} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { photos: state.photos.photosList };
};

const mapDispatchToProps = (dispatch) => ({
  getPhotos: () => dispatch(getPhotos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);
