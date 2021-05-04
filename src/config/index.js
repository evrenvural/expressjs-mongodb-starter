import mongoose from 'mongoose';

export function connectWithDatabase() {
  const username = 'evrenvural';
  const password = '1';

  mongoose.connect(
    `mongodb+srv://${username}:${password}@wat-sozluk-cluster.rg5on.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    error => {
      if (error) console.error('Connection error!', error);
      else console.log('Connected with database');
    }
  );
}
