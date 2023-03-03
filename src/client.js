import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'


export const client = sanityClient({
    projectId: 'r0q90zcw',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'sk6fDyUAYazre1rlmQwulZMHQcIgywz7MQIRnZNIOy7y1N5qrPxgCJQ2I7HZohn8p6sl1ElrTNw46v4LOLXdnUNquOqsKqJ1yzzA866eTUJZSAURXAaA6P2s5BNEYKp81KMhaGV0PU7h0TjWTDWjK4J9QJMvErLLMJn3r9TbMo0SJHK9rtdk'
})

const builder = imageUrlBuilder(client);


export const urlFor = (source) => builder.image(source);