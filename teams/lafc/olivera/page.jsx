import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CristianOlivera = () => {
  const items = [
    {
      "title": "Cristian Olivera LAFC Autographed Fanatics Authentic Match-Used #13 Green adidas Jersey from the 2024 MLS Season - Size M",
      "price": "$299.99",
      "originalPrice": "$299.99",
      "category": "Autographed Memorabilia",
      "shipping": "Ships Free",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/lafc/cristian-olivera-lafc-autographed-match-used-number-13-green-adidas-jersey-from-the-2024-mls-season-size-m_ss5_p-202767522+pv-1+u-srfhw6svbhpt0emsx9zp+v-kwaeiq61xw9i45t75fpb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/QjANmz"
    },
    {
      "title": "LAFC Autographed Fanatics Authentic Match-Used adidas Soccer Ball from the 2024 MLS Season with 24 Signatures - #1",
      "price": "$499.99",
      "originalPrice": "$499.99",
      "category": "Autographed Memorabilia",
      "shipping": "Ships Free",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/lafc/lafc-autographed-match-used-adidas-soccer-ball-from-the-2024-mls-season-with-24-signatures-number-1_ss5_p-202986525+pv-1+u-5fehbyxu2vcsqcbdjzmm+v-yrumkqaq5u7pr9emrsqb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/DyObXG"
    },
    {
      "title": "LAFC Autographed Fanatics Authentic Match-Used adidas Soccer Ball from the 2024 MLS Season with 24 Signatures - #2",
      "price": "$499.99",
      "originalPrice": "$499.99",
      "category": "Autographed Memorabilia",
      "shipping": "Ships Free",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/lafc/lafc-autographed-match-used-adidas-soccer-ball-from-the-2024-mls-season-with-24-signatures-number-2_ss5_p-202986524+u-qun7zzgve7if0xp72rgj+v-y88kwo1k8chgrqfxurp7.jpg?_hv=2&w=400",
      "link": "https://mlsstore.i8h2.net/QjANm9"
    }
  ]
  ;

  return (
    <div className='w-full min-h-screen bg-white pt-[1px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Cristian Olivera</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.vamofutebol.com/uploads/5/2025/01/GettyImages-2153266577-1140x760.jpg' 
            alt='Cristian Olivera' 
            style={{ objectPosition: 'center 10%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Bill Barrett/ISI Photos 
| 
Credit: Getty Images
Copyright: 2024 Bill Barrett/ISI Photos</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Cristian Gonzalo Olivera Ibarra</li>
            <li><strong>Date of Birth:</strong> 17 April 2002 (Montevideo, Uruguay)</li>
            <li><strong>Position:</strong> Right Winger</li>
            <li><strong>Height:</strong> 1.70 m (5 ft 7 in)</li>
            <li><strong>Current Team:</strong> Los Angeles FC</li>
            <li><strong>Youth Teams:</strong> Arapey Mendoza, Potencia, Flores Palma, Danubio (AUFI), Cerrito, Danubio, Defensor Sporting, Rentistas</li>
            <li><strong>Senior Teams:</strong> Rentistas, Almería, Peñarol (loan), Boston River (loan), Los Angeles FC</li>
            <li><strong>International Career:</strong> Uruguay U15, U17, U23, Senior Team</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Cristian Olivera: Rising Star from Uruguay</h2>
          <p>
            Cristian Olivera is an exciting young talent from Uruguay, known for his pace, dribbling, and creativity on the right wing. Starting his career at Rentistas, he quickly caught the attention of top clubs with his performances in domestic leagues and on the international stage.
          </p>
          <p>
            After stints with Almería, Peñarol, and Boston River, Olivera joined Los Angeles FC, where he continues to make an impact in Major League Soccer. His journey reflects determination and skill, making him a player to watch in the years to come.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Cristian Olivera Merchandise</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
          {items.map(item => (
            <div key={item.id} className='bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
              <img className='w-full h-64 object-cover' src={item.imageUrl} alt={item.title} />
              <div className='p-4'>
                <h3 className='font-semibold text-lg text-[#020617]'>{item.title}</h3>
                <p className='text-gray-600'>{item.price}</p>
                <a
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
  className='mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
>
  Buy Now
</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CristianOlivera;
