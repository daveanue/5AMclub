import boto3

dynamodb = boto3.resource('dynamodb')
s3 = boto3.client('s3')
table = dynamodb.Table('Products')
print(table.creation_date_time)

imageUrl = 'https://example.com/images/new-product.jpg'

def create_product(name, price, description, availableQuantity, voteCount=0):
  table.put_item(
    Item={
      'name': {'S': name},
      'description': {'S': description},
      'price': {'N': price},
      'voteCount': {'N': voteCount},
      'availableQuantity': {'N': availableQuantity},
      'imageUrl': {'S': imageUrl}
    }
  ) 