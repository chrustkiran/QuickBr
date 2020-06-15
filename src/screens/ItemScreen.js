import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import ItemCardList from '../components/ItemCardList';
import {ScrollView} from 'react-native';
import ReceiptData from '../common/ReceiptData';
import {Button} from 'native-base';
import environment from '../../environment';
import { db } from'../config/FirebaseConfig';


export default class ItemScreen extends React.Component  {


  data= [{
    id: 1,
    name: "Bread",
    price:65.00,
    image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxESERUSEBAVFRUVFRYXGBUYGRgXFhgYFRgXFhUXGBgYHSgiGB0mHRgVITEiJSkrLi4uGiAzODMtNygtLisBCgoKDg0OGxAQGy0lICUtLzItLS0tLS0tLS8tNS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAwECBAUGBwj/xABGEAABAwIDBAcGAgcGBQUAAAABAAIRAyEEMUESUWFxBQaBkaGx8BMiMsHR4QdCFCNygpKy8UNSU2KiwhYXJDOzFTVjk6P/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QALxEAAgIBAwMCBAQHAAAAAAAAAAECEQMEITESQVETMiJhcaEUI5GxBSRCgZLB4f/aAAwDAQACEQMRAD8A9RREVQEREAREQBERAEREARFYyq0kgOBIzAIJHMaIC9ERAEREARUcYubBY1TpGg34q9Mc3tHzSyUm+DKRa89OYQZ4qh/9jPqrHdYMIBP6TTI/yuDvBsqvXHyW9OfhmzRaVvWnCH4ajid3s6o82hS0+mg74MPWP7rRnzdIVHnxr+pFvRyeGbVFqMR0w9jS52GfGkOaSe+B4qTo3p2hWdsNds1Ik0n+6/KbDXslTHNCTpMh4ppXRs0RFoZhERAEREAREQBERAEREAREQBERAEREAREQBEWLjKp+BjocRM/3W6lRKSirZMVboykXL47q0KgAdWquG4uLhzgysGj0HiGjYoY+s1k2B2oG6C7LI2FlzfiWnvE6Vp4tbS+xkdM9InEuNClIY18OcCRtFsyOI4dsrGPVak2HB1Wk4G1RroN75tIhYVPqpiqbgRiBbagEAztfEbt/otthcP0pTMCtRfNwHNBiM7CMlyNuTuSdnWqgqhJURnqzix71LpCueJe45cCSCr3dF9Ix/wC4OGvvNa0/yjipyzpJwA/SqTZzLWi06jONVj1OiMY8gVMe4gzGybzvmM+Eq1vtZW75cf0/4SUMJ0gB72PbESPdpkn97ZgpUwOLHvP6S2Te3ugAb4IjwUD+qwLoqYqo50DMuPYc9d6yMP1VpAS4PdfI2J0Lioub8/qLgu6/xRosYzCuj23SL6pIFht1BxiGkBQPw2CYf1Zq1crhoAHD3y0rtKHVzDNI/VXzm8duk5LOw/R1JpltJo3ZTxso9GT5r7k/iIri/scfQ6LbUE0sG+M9qqYHMBufYVssP1bk+8abQNGtnxdMDJdQ3DgGQ2L6Akz2aDmshtMHODx8VdaZPkylqX2OMx1UYB7XVADSJ2XQNl4mwcC3McCumwtek9ge2o1zHCQ42kGIgnsXAfitjpcGDIETfM52HCy0vVHrPUoVgw3puIlmQBGo3ZXVccum/Bu8DyY1Luer1qY2ozG/UDd63814112Ozi/cs5t5BM2JgWOYjNezU6jfZ7QB2dmZNuM77/JeJ9Zau3ii7eY7s+ySpn7kTo1bZuuhutuJq7FCtXeLQ17fjPBxBG0bRc9srZ9YulMbhmBwxL9mYEhhdwkwTFtSuK6MZFYX+Em/rtXoXW9ntcEHHVoOhuMxKrKbTu327m0oQjOK6VT+RpsL18xWy0uqNOl2DvMRPYs6l+IVYH32UXW0225Z3krhQIaBoPqVR9LxkDyVlkmn7mXelxPmKPSKP4iNg7eHH7tQHvlojmsuh1+w5Hv0qjb6bL+2xC8rNHQXv8/urTQILSDx9eKus+Tz9jN6LD4+57Mzrfg9rZdVLTrtNcAOZiO3JbHC9LYep/269N0bnCe6V4V7eoWwXGxgHUjOOOZUtSuWgGxM3ncQrLUzXKRjL+Hw7NnvoReL9G9P16DA+nXeNdg3YOGyc7zuXqPVrp2njKW22z2HZqN3Oibf5TmPsV0Ys6ntwziz6WWJXyjboiLY5giIgCIiAIiIAiIgLKtQNaXOsGgk8gJK5rq/iX1WF7yS5xDyfyxtQGW7bcBK2vWZ8YOuRH/aeL3zER4rC6sYNzMNTlhMCbCcgYvqbn0FyZ23NI6sKSxuXzN66gNn3XQReQLmM7HNAzbgg3aNxjaI1IzAvZXtII98GXD4YyGgMKRtUGYFha2SmkU3IaLC0Q58nKGjZ8CSrvYNGWpykW7TdXhtoAid0DtKoGvm0Ab7zCJCzGGEp3bslu2QCZJJiYE3hSjCgRDnbIi07tTaVMwAfDr6n0VLEevspUEHJmO2m4D3nCJuR8lSiXEmxAGW1BGWZh0rJYBFh4fPVUc2Yg2vOc9hU9JFllNpPL5aK8M5eOQ5qlGm4WLpHdfgNFJIMHZPiP6qUQWCnM5/T69iVDAuchn2ZqQu9fRaTrZi/Z4Z5mJBA3jMk9ypkl0xbLwj1SSPIOvGPNTFXyF/4ju5QsDoamTXDoEAye3Ra/GYgv8AfOZdJ7Mvl3LYdDNJq+0mGtgnX7WXJ09MKPda6Y0exYut/wBDtz+XjMx/X6LxKvWL3F0658DqV6p0v0k1vR4Eidx/ze6Jg8fDVeUNZBcDmZA7LpF3Jv6GOkjUW/mbrq/TbUqH3ScoNrWJJM55Cy6npnHEUDTuS0AwdATeI1+q0XUgu/WFsh1hN4i5I8fELM61O95zdqSaYF5Fwdo2M6tFlnkW9EvfLRzgbDiJkOHcDbzUQB+H1ZVbtFs7pPYc/FXvkkcY72mD8lc6CrXSMsu8yrmOI5eilOnBjfwzByKVTYjXPu+ygEVRvvRv+dwq12zM79c4yKoxwME6d8XhXVXQd4I8/upIog2oZB4/f5Lp/wAJ8dsYx9Im1amYG99M7Q/0mouXqCBycPoVndU63s8bhnb6rG/xu2HeDitcTqVmGePVjkj3dEReifPhERAEREAREQBERAaLrnU/6b2YzqvYwd+0fBpWf0dg4Y0SQ1sC0gkgRfhHetN1k/WYrD0hMU5qmL52bb913eukItBmBBNyLk+JXFJqWRvxsdftxxXncmLczMcdeCUTab5/mibb9yowbyfWio8bRA2bXJPkFoZFRUBkgjnyvf1qqEzHva+Vzn5qA1CSIEGBI1idTop9t8NFpm8+PioUrJojpM2iTlBvbOMr7s8lObAyTzm3YmQvJMafKVWoLfBlcDO+fepSpEFRU7fJU9oIkuIuLj6QrWkkCxE6HRSNsZz4eQ4KeQSESJnu1VzY7zPJUBtyn0QgO/v4K5UtgDKFw34kdKbLRSaYJB3ag713LmheNdf8YX4oX93aI/hiFyah8R8/6O3RQ6slvscbiKfuO4Gfkt91PwYcxxeJDpaPAa8vWuorskubvnzsux6u0hTpiTkB9fCPFZSl8J6Wd1Ew+smMPvsIlstbeY90G9iINwtG6lcWsYPmFm9KVPaB0i5l3jn63KItkMAF52fKFnHZGkVSSOr6m4ZtNgBIBdJG9xn7Adi1nWpv65x1BGfaF1PRjWNYxkGWSRAiQS4A27fRXO9NOD6lfhF9bQVWT4Zy4pXkbNHQojaIOTh3A/eEbQlpBzBkW3W56KWLNnIOieBjuUriJDhr53BujbOqyx2HOyDIkW84WDjGQQRkRIHHUfNbSl+ZpFjl8vNYjaW0IIyM91iFEZUEYVKgRcHfG691SqHPE7NxGvCFsGs92dxy55euKlLW7WXxA/RW6w2aOu0giciBOelvoexZHQroxVCREV6P/kafJZD2hwIObSbK/o6kTicORma9Ef8A6NgrWEt0Zz9rPckRF6p84EREAREQBERAERUc4ASchmgOew9MVOkKz592m1jO2JPbPkt+2psiXEakzwv5ZrSdVwXGrWLNn2tQuE/3d9+9bx5BItPLK0rhhunLyzryc9PhIl27TwnvVHPsDBzka7xPBUY6QCRszv8AmpHWGcZaabt61MiFhbaG3OYi/Mz6urqJJvGpGulkDjnEczkByVQ421mde5QiQKcG2nbnnxSlaSAbkk+uSr717AXHGd+tlVm+Rxj68FNEF3tCbZdyspku/KRvm2W7vVzZzPrcpWwbj1CnkFRaRGeZVKZnfA8eSNba8mXK8qSDE6Sr7FN79zT9l4P03V26hdmdq/M6eQXsfXHGCnhzJz8YC8WruLjVcTmS7s/ouLK7yfQ9XQxqLZbQpB1YcpPIAfNdpQpinQcJFgd0mbTwuFy3Q9ME7RuYiO3RdJ0jVihaIJA35QPJZTZtl3mkaKpRAqbMyCByyjRXdF0Nups2kXHMego6zi4sfzB8IWf0PS2sQ4NMe6DOcAkSYnPMKiujWbqLO1+EkBoBaAMrGwJI8FxHSNQh5N5L3bQ+XcCu0Y+Y+ImfigkEATtHdMZDguNx42i+JtUJ7Bn4HwSb3ObTcsxtgTsHLTtkgqlFpcyCLtg/w/EOP9FdUMt2hNoB+Xmrp2SHQACPHI88iqnSWVHS0Gbghp352UrvdIdofMWIUOHZct0JMcjMdylaz3HNOYy5icu9GGY76X5RN8v9vyU7oLMvhvfUHNRgWFshcq6q6HTo6PHPxQMxahG1tDJwHfF1m9WxOMw4OQrMI7DI8lhubmNcx2LZ9UKO3jsP/lc4n92m8+cBbYt5oyyuscvoz11ERewfPhERAEREAREQBa/pusRT2GCXVT7MD9oHaPdK2C1OKrB+IaxtzSBLjoC+IHOL9oWWeVQNMSuRksa0M9nIAgNMHvyvvG+ynFFu1YkbwN5iCZ9XVMM5rptewki1gbcc/FSh0GNc9cj4ZLBJUaNsq+g03c2Yyz4TPcFdfI2kdg5nJUB3EE+olXNYYIMbgMxHz1U/Qgse7ZtMgyZi3EnTcFcGAnaM5eGeSuDBJtPiBAVSDBIziwylWogoXC0cT9AqMaIIAgcs51VQDF89Y1VzHXiRy1j1CAqG3sBlAJzV9wOMTwkqxrgbhw49hiO9S7VuHq6sQHui2frRHDTekyJ1VtR0SUYRwX4mYkhsWIGznBuTnBz1XnFQHaP+ZvnYrq+vmMD6r2yZF40EG3CVygBPszxjyXm3bb+Z7mnj0wSNp0HSs3K8kcJyzW76VaIY3O/fANxK1/RtJpIBsQGxzO135t7gsrpZwkSdmAYgTe4VJlE7yWaUD3XM/u37QYstr1cAkuJiBE8jPz8lr3kCoHRZwHiI81sugaMNMiYIsY1ifdz0z5ojTM/gZ1WHdmBr3Xkx5eiuOxDtlziRYVHCMuPeusw9dsCN5uMjDnQeFvkuZ6Q941G76h2f2hc+BhRPkw0/LMFrdlxBycIngcu5WsNiw55i/f4KjnhzSNWd8fY+asqOPuvmCDB9cVB1FaU+znNw37ideSkq2O0OR5/08lWk6DINnd0ahWxO0zebdmSdww1l3CbHIbp+9lBtEjZOYn7hSMuDa7fLKFHWsQ4WGvPVSiCOsbB0ZSCefoLd9Qmf9eyBbYqO/wBBafEhaRwEkH8wt8l0f4bXxhtcUKn89Nb4PejDUP8AKl9D05EReseEEREAREQBERAR4iu2mxz3mGtBcTwFytH1ZoONM1Xn36pLydZdlaOzsTrZULxTwzc6rpd+wy57zHcVuMCwNaBEAC0T4BcmR9WSvH7nVBdOO/P7InYcg4DXjNxdXbM+9J1toRxUJMEAbXvW1AAO/UH5wsgiI2RG/wDoiKMsZTyMCbXymMh3KjgdDa+XrPkqscSbgeZztI0Oakm+QiM9VOwKXAy8Ln6KlJh+VyZjtVHlwIEiDMyLxGkK6m7hs+MiM+CbWQWBhOZmDM9+6yYZ4LJjI2MZwdO1SAQOOfqEpzeSCdYyG4IlQKWDtojIQY017P6K+iTmfzHLy8Fdp70EWyFvvdVc7XdP3VgU2D9FDiyA0mcgfXrcpTUlaXrVjgzCvdkII3ZT9FnkklFsvji3JI8r6xVScS6eR0uT9x3rX4ZpgAZj5AhVxL5c1wEXO856TPO6vwg/WPzzHcbnuXClUT23tE6LANcchZt9M7AAHTXuCtx4a5zgRk3TeZiQVP0UIbBAF7E6REzOgEBarpaqRUOlwI3wBJPf5qklZhiVyZiF4NMcD3D0FuujcQPZPLhptZQd3abG3BaNx2XloycLcJv3rZdCAuDWjOeBcImDB5BWSNM3sOnwzIbO0bugyA24JtxguN1zXTAIqPMQNsH+IQeVwuiwVbaEkObznaiBnrYyO9aPpypFYtPwuAJ3nOPmomY6f3GtquyqN/NmOOoI1WO8Q68bLgIv6yupGwCWONj3A6FQzI2DpBFuIlEjqMikDdvAxzlA+Wg5Fsdys29pm0LFunl8la6sBDhcEwe3eoogmpuycMiDIWLiCQS3uU8QS3Qi3rvWDi3y0X94W7FaK3Bf+WNW+RXX/hnRnE1qm6k0fxuk/wAi4+RIJ/ML+RXbfhXSO1iXnIezYOzbcfMLo06/MRy6t/lM9AREXpnihERAEREARFDjKuxTe/PZY4xyBKN0rJSs5vA1/wBIxr6wuxgDGXGhu7PImfBdPRqEFstLZkb7jKeEDxWm6s4U06DIaCYJ7yIP81lvmCL5nuzXDjtrqfL3OrK1dLhbFzNoZxHj39ytgzx+V1UAzY5cvKFU1JtNh6jgtTIsZbIXvJjMjerqdMjMZcSfNDGouMrT3QFaa2y2TbmIPao2RJK2n4efzVXkA55/K5WGMdyKNxInIetydaHSzMLzMaerJt7x9lAytOUZcFVr5MHwJ1U9RFE5Maq0NAm8TnuUYeBYTzzHjnyRxJHxRxySxRI8nIWXM9eMRs4cifiHn/VdG4xzXC/iITA4bIzjXLj9lz6h/DR0aaN5EefCNjO4I7svosrCi87727vJRbEudxEqWlUBMQYaQJ5Xz5rms9TI9joMHUIG+R/p3Z74PMLU4qoahfAkgmOwgfVbXDPAbkeIiwGXZz5LT0wQ7aj4p5RP381SXJnhXJiVjLGmfhidLG/rmtvhXMaA/ZBIiNID7+cdi1VRoAcyND3xI8ln4UiASHZADKIEC7cyrotn9pu8LXOpu4CYOty5oB4Ed3FYHT9OXyN0WOpiLjmpaDwCIuQC4zaNqZnj8lg9MVY2HC0TOV7QokY4feaV9XaBH5m8u3wVBVBbtatEOj1ulYmKb+t2m5O89VFTqFrzOR+eRWqjsdjNsyoGw7R2Y7/r4KtGmA8tORMjWCBYrXVa0tczcARzF/qs2m6WgTdt+xUcaIZNUf7o3tJHZ9lj4pkEO0Nj4SpXvvO8XHn8lY69icsvXJEVLdqLaC8zqvQfwrM0a5/+Yf8Ajb67V5ri3+7OozXqX4WAf+nhwzdVqk8YIaPBoXVpo/FZx611i/udeiIu88gIiIAiIgCtqMDgWuEgggg5EGxCuRAecdZcficBV2KbopuE05yjUTESO/IrSU+u+JMk1yOA88/kvWOlMEyvRfSqfC9pE7pycJ1Ga+eeunRz8HiDTc4OFoqN+E2BO/ZInI38CuGWmp7cHq4NTjlH40rX3OrPXfEOOz7Z0jO4Gu75c1KzrZUZc1SXRmHCfLxXnFHE1PibTN9zTz0WUKWKPvGjVj9h0X7FV6Zmyz4fB6DT631szVf3kKLEdcapMtquAGVwT8t64hjcTUnZputmSIA7XEKWj0diSDtAAN0cQJvoqrTMt62BeDtKXXOsRercf5R9Ssij1xqgge0n92bc5XnNVtQG7YJ7RfishhfuH8Q8pR6d/Merp34PTj11eB8TDzafHNZmF66OzdsEc4jhBheSHEPaZMW3RHeFT/1h8yNDO8ds5hR6ORcNlf5drse00eurHGNm/BwJ7NSsxnWmladsTlbzXh1LpnZy58O7RTU+m9o3NtyjpyruPQwPhnuzen8PBdt8YPguE61dIivU2gRsiIjI53nULjmdPx8J1uJ71k0ulAchnmM+3jxWc45Hya4cEIO07M8/EIvaPRWPhnAuOycidxuDuUdbGEU3uZtOdsmNm7toiAcjeSO5cg3HPpgAtLbagtlWxYZSTZXNOMX0s9Swjg4ERGnYoMU0BoOjb+MfVcP0X0+aeZsefatwzpkVGi8jdrz+yzyYZplsfT2ZNjHnbB0PjB+6ysJXcBEwRr8uC19XGNI2oLtmTF55LWU+nYd7xuZJ4SdyvGEmuBnlHZHZUq8C5NzJsY3gX5kqzpE7TRaDBtzHBaXCdLsNtrvWXisewNu4TzmVWUWZY1UrNaGxAhWupyLhWP6QpzmO8KF/SdOfjHetEpeDoeSPkkqsgTuWTQq22hnr63LXO6QB+FrjyB+itp1an5KVQ/uPPyV/Tk1wUebH5RtalUA8FG6ruzHr6rB9hiTlQf2w3+YhVGAxh/smt4lzflKstPLwZPU4l3K43FajXNetdQcVSw+AoseSHEOe4EGxe4uA7iF5h0b0I/2gdiNlzQZ2ATBOm0YEjguvFVx0XVhxOHJwarULIumJ6COm8P8A4ngforh0xh/8UeP0XCUsHVf8NNx5AlZlLoHEu/syOZA8ytzjOzb0nQP9qzvhX/p1L/FZ/EFytHqtWPxOa3tJ8gssdVD/AI3+n7oDpWg3kz2RCuRFACjFIRF455clIiAtDBERbvUFTAUXfFRpnm1v0WSiA1h6v4Q54Wic86bNey6ub0FhQ/bGGpB0ztBjQZzmQM+K2KIDVf8ADWCmf0SjP7Avz35lXu6v4MxOEomBAmmwwNwkZLZIgMCl0LhW/DhaDeVNg8gsluEpjKmwcmgfJTIgIjh2HNje4KCt0Thn2fh6LudNh8wsxEBoqvU3o52eCoji1uwe9kLV4j8Mui3GRQe39mrU/wBziuxRCU2uDga/4S4Bws+u3iHM+bCsb/lHhx8GKrA7yAf5SF6OijpRZZJLhnmlb8KmOhv6YTF42SDe02f4rHr/AIVVPhbi3Obuc4x/C5rgvU0StqWxDk27e55O/wDCMxH6Sy+hpsBncHBsz2qmE/CMgf8AfBzzFRp7rL1lFNBSa4ZwOF6gPYNkV2AcGn5rI/4En46rDzZPmV2yJwQ23uzhKn4ZYZ2bmC8y2kAf5lN/y2wh+KCd5YPmV2qJS5HU6qzj2fh7hG5AfwMHyKy6fUrDDJz+zYH+1dKikg0DeqWGGtQ/vD5BSDqrhf7rj++Vu0UA0w6r4T/CJ/ef9VNT6v4QZUG9snzK2aIDGp9H0W/DRpjkxv0UzKTRk0DkAFeiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgBREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/2Q==",
  },
           {
             
     id: 2,
     name: "Bun",
     price:15.00,
     image:"https://savoryspin.com/wp-content/uploads/2018/11/Picnic-Chicken-Stuffed-Buns-720x540.jpg"
 },
            {
     id: 3,
     name: "Seeni Roll",
     price:30.00,
     image:"https://lilluna.com/wp-content/uploads/2019/01/cinnamon-roll-ups-resize-9.jpg"
 }]

 state = {
  addorremoveBtnChange: 0
}


 addItem = (itemId) => {
  const bucket = ReceiptData.bucket;
  if(itemId in bucket){
  bucket[itemId] += 1;
  } else {
    bucket[itemId] = 1;
  }
  db.ref('/bucket/' + itemId).set(
    bucket[itemId]
  );
  ReceiptData.bucketEmpty = false;
  this.setState({addorremoveBtnChange: this.state.addorremoveBtnChange + 1})

}

removeItem = (itemId) => {
  const bucket = ReceiptData.bucket;
  bucket[itemId] -= 1;
  db.ref('/bucket/' + itemId).set(
    bucket[ itemId]
  );
  this.setState({addorremoveBtnChange: this.state.addorremoveBtnChange - 1})
 // this.checkBucketEmpty()
}

    render() {

        const styles = StyleSheet.create({
            container: {
              paddingTop: 0,
            },
            stretch: {
              width: '100%',
              height: 200,
              resizeMode: 'stretch',
            },
          });
          

        const shopName = this.props.route.params.shopName
        const mainImage = this.props.route.params.mainImage
        const bucketEmpty = ReceiptData.bucketEmpty;
        return (
            <View style={styles.container}>
                <Image style={styles.stretch} source={{uri:mainImage}}/>
             
                 {this.data.map(item => <ItemCardList name={item.name} id={item.id} addItem={this.addItem} removeItem={this.removeItem} price={item.price} image={item.image} ></ItemCardList>)}

                 {
                   this.state.addorremoveBtnChange > 0 ? 
                  (<View  style={{marginTop : '57%'}}>
                    <Button style={{ backgroundColor: environment['dark'].maincolor}}>
                     <Text style={{marginStart: '40%', color: '#ffffff'}}> View bucket</Text>
                   </Button></View>) : (<View></View>)
                 }
        
            </View> 
           
        );
    }
}
