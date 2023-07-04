//MANEJADOR DE ERRORES ASINCRONOS
// modele.exports = (fn) => {
//   return function (req, res, next) {
//     fn(req, res).catch((err) => {
//       // puede continuar al manejador de errores
//       next(err);
//     });
//   };
// };

//Es lo mismo que
module.exports = (fn) => (req, res, next) => {
  fn().catch((err) => next(err));
};
