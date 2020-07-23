import {useState} from 'react';

const mockData = [
  {
    name: 'Nick (The Cage) Cage',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/c/c0/Nicolas_Cage_Deauville_2013.jpg',
  },
  {
    name: 'Dwayne (The Rock) Johnson',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/4121Bd-zGxL._AC_.jpg',
  },
  {
    name: 'George Clooney',
    image:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2015%2F07%2Fgeorge-clooney-600x800.jpg',
  },
];

const useActors = () => {
  const [actors] = useState(mockData);
  // Additional functionality would be added to the hook to add and remove actors from the stack
  // The hook itself would also get its data asynchronously from a server

  return [actors];
};

export default useActors;
