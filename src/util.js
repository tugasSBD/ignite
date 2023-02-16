// export const smallImage = (imagePath, size) => {
//   const image = imagePath.match(/media\/screenshots/)
//     ? imagePath.replace(
//         "media/screenshots",
//         `media/resize/${size}/-/screenshots`
//       )
//     : imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
//   //   console.log(image);
//   return image;
// };

export const smallImage = (imagePath, size) => {
  //   console.log(imagePath);

  if (imagePath != null) {
    const image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
          "media/screenshots",
          `media/resize/${size}/-/screenshots`
        )
      : imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
    return image;
  }

  //
  return imagePath;
};
