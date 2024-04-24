import { Button } from 'flowbite-react'

export default function CallToAction() {
   return (
      <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
         <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
               Want to learn more about JavaScript?
            </h2>
            <p className='text-gray-500 my-2'>
               Checkout these resources with w3schools website
            </p>
            <Button gradientDuoTone='greenToBlue' className='rounded-tl-xl rounded-bl-none'>
               <a href="https://www.w3schools.com/js/js_intro.asp" target='_blank' rel='noopener noreferrer'>
                  w3schools JavaScript
               </a>
            </Button>
         </div>
         <div className="p-7 flex-1">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVsAAACRCAMAAABaFeu5AAAA6lBMVEX1/+Ou6Tiy7jj7/+mx7zGp4jeAinhwljP6/+etr6v3/+Wg2ilkhjKx7jaAsh/9/+xohUPW3M3O0sdwiFSHuiGa0ieUyia1ubK8v7gAAC6bnJuFjn+q5iy29Dik3DcNEi8ZIi8MES8FCC9ZeDKVxzZfgDKDrzSd0zY7TzBIYTEQFi/k7NW+w7VlfUt4qwheeT6lqqCz9Ch2njOKuTUdJy8VHS9PajFskTOItzVDWjEpOC+RwzUgKy98pjSIvhZ8hHiioaddb05jiyBpdGVqlhyMj45ib1lxoBaAhIJ6eoEAHxROcB0sJ0nV28g4s2yDAAADfElEQVR4nO3da1PTQBSAYbJJNQTXCpbaraS1TaFAVbQKKFiKF/DK//87JlBpdMZxCT3mMu8zQ7l8CNN3MiebBpqlJQAAAAAAAAAAAAAAAAB58osgyLuCCP/pcgGMKhm3/mxjJXfP16rZ9qHn5E01qtpWO47OU7XbdvYe5GevU+m26616flrNard95Of2+33aiqGtHNrKoa0c2sqhrRzayqGtHNrKoa0c2sqh7TXftWO/QdrO+E/v2HlhvUXazvhtz8rLx67tFmk747c3rK7SeLRdoq0k2sqhrRzayqGtHNrKoa0c2sq5bVul1Oyznn1F219u2bY2Hk9UUnYrOth8pRVtU27ZtmNML3TUsGsSr48Vbedu3bb7JHRqpncZt2cGirbXFtFWjU13f+AMD0yk2W/nFtI2MmYzdJxwi3mbtpC2h/F+20n+SJl1QtpC5m382DObHc0a7DcLaavemP6uMZHDTEjL2Fbpq7XsVVtHD7eTuvsd2qZka6smOzuXB65Z2/g4NnhrdvtHrBNSsrXVh8bc/a2to8KJ2WV9m5Zxvx3H0zVuqgamdxTP20Gyv4avu2aLtnMZ2x4n+2gYqu2+iZTaModKh534Z8e0nct4LNNH8aFre6cfPw5VPBiM2Tkw3f475m1K1jXY0Jhev98zZqKd+Nxh9s2Q12pSsrZVtc0nJt5bLyetHkb7xnSjGuvbtOznDuryH4FnNbW++qBtCtd05NBWDm3l0FYObeXQVg5t5dBWDm3l3LitskHbxM3auu2Tho2TKW1v2jYYrdmxfhNA2l4LbNlukLZyaCuHtnJoK4e2cmgrh7ZyaCuHtnJoK4e2cqrf1rV+nWDR3Kq3PV3Nz2m129bu56lW6baO1bUEKVW+v0OYa9mEbqzldzAVE9SXo3sFMB3ZXgMqi6C+9n5d573XxrT3oW3/Fo5l4I6mz0OrS+Ly9Mpeq16Zoeu77Q8b6t/P+n/xGh9X3UrUDeqtZyv638/4P1LepzO//IMhcEcfG/nft+xPaiNaLvtg8P2zT16BxsGc1zxfLXPdoP4oWilk2YT3+Ytb1vVYUL84b4ZFWHj9RegdlnQwBKOv3ybju4U2/v6jlPc9DVonTq3onGarjOuFoNUs7Ki9psradt3u3dhztV7OthdTy7sI5Gl6UcZ5G582lEEp0wIAAAAAAAAAAAAAAADl9RM4394FgyYQdQAAAABJRU5ErkJggg==" />
         </div>
      </div>
   )
}
