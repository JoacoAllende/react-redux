import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhotos } from "../../actions";

function PhotoList() {
  const photos = useSelector((state) => state.photos.photosList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos());
  }, []);

  return (
    <div className="ui small images">
      {photos.map(({ id, url, title }) => {
        return <img alt={title} src={url} key={id} />;
      })}
    </div>
  );
}

export default PhotoList;
