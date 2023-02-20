import  SanityClient  from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";

 export const client =  SanityClient({
    projectId:'jtk9jumd',
    dataset:'production',
    apiVersion:'2022-11-11',
    useCdn:'true',
    taken:process.env.NEXT_PUBLIC_SANITY_TOKEN
}) 

const builder  = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)