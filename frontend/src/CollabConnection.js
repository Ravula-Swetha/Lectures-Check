import axios from 'axios';

const getSentenceEmbedding = async (sentence) => {
  try {
    const response = await axios.post(' http://127.0.0.1:5000/embed', { sentence });
    return response.data.embedding;
  } catch (error) {
    console.error('Error getting sentence embedding:', error);
  }
};

export default getSentenceEmbedding;
