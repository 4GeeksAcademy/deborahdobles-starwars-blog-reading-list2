const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
			],
			message : [],
			character: [],
			planet: [],	
			vehicle: []
		},
		actions: {
			
			
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				
					fetch("https://swapi.dev/api/people/")
					  .then((res) => res.json())
					  .then((data) => setStore({character: data.results}));

					  fetch("https://swapi.dev/api/planets/")
					  .then((res) => res.json())
					  .then((data) => setStore({planet: data.results}));

					  fetch("https://swapi.dev/api/vehicles/")
					  .then((res) => res.json())
					  .then((data) => setStore({vehicle: data.results}));
	
			},

			changeMessage: (messageText) => {
				const store = getStore()
				setStore({
					message: [...store.message, messageText] 
				})
			
			  },
			  RemoveFavorite: (name) => {
				
				const store = getStore();
				setStore({
					message: store.message.filter(uid => uid !== name)
				});
			  },


			  
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store 
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;