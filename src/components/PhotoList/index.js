import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhotos } from "../../actions";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function PhotoList() {
  const photos = useSelector((state) => state.photos.photosList);
  const dispatch = useDispatch();
  useDocumentTitle("Photos");

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
