interface Data {
  children: Children[];
}
export default interface Children {
  data: InnerData;
}
interface InnerData {
  title: string;
  thumbnail: string;
  permalink: string;
}

// I need a model where {title: string, thumbnail: string, url: string}
