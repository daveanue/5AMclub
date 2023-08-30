import { PRODUCT_URL } from "../../api/apiLinks";

export async function sendVote(productId: number): Promise<number> {
  try {
    const response = await fetch(`${PRODUCT_URL}/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });
    const data = await response.json();
    return data.updatedVoteCount;
  } catch(error) {
    console.error('Failed to send vote: ', error);
    throw error;
  }

}
