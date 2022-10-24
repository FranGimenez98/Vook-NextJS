import db from '../../../../utils/db'
import Book from '../../../../models/Book'

const handler = async(req,res) => {
    await db.connect()
    if(req.method === 'GET'){
        const books = await Book.find({user: req.query.id});
        await db.disconnect();
        res.send(books)
    }
}


export default handler

// const handler = async (req, res) => {
//     await db.connect();
  
//     if (req.method === "GET") {
//       const order = await Favorite.find({ user: req.query.id }).populate(
//         "product"
//       );
//       console.log(order);
//       await db.disconnect();
//       res.send(order);
//     }
//     if (req.method === "DELETE") {
//       try {
//         const favorite = await Favorite.deleteOne({ product: req.query.id });
//         res.status(200).json({ message: "Successfully deleted", favorite });
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };