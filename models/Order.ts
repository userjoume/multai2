import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  characterData: { type: Object, required: true }, 
  pdfUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: 'pending' },    
});


export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
