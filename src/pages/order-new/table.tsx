import { useState, useEffect, FC } from 'react';
import { DataItem, sampleData } from '@constants';

const Index: FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [copyText, setCopyText] = useState('');

  const fetchData = () => {
    setData(sampleData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopyText(text);
        setIsModalVisible(true);

        setTimeout(() => {
          setIsModalVisible(false);
        }, 3000);
      })
      .catch((err) => {
        alert('Xatolik yuz berdi: ' + err);
      });
  };

  return (
    <div className="App">
      <h1>Foydalanuvchilar Jadvali</h1>

      {/* Modal ko'rsatish */}
      {isModalVisible && <div className="modal">"{copyText}" nusxalandi!</div>}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Phone Number</th>
            <th>Age</th>
            <th>Address</th>
            <th>Product name</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Payment Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td onClick={() => handleCopy(item.id.toString())}>{item.id}</td>
              <td onClick={() => handleCopy(item.name)}>{item.name}</td>
              <td onClick={() => handleCopy(item.phone)}>{item.phone}</td>
              <td onClick={() => handleCopy(item.age.toString())}>
                {item.age}
              </td>
              <td onClick={() => handleCopy(item.country)}>{item.country}</td>
              <td onClick={() => handleCopy(item.product)}>{item.product}</td>
              <td onClick={() => handleCopy(item.quantity.toString())}>
                {item.quantity}
              </td>
              <td onClick={() => handleCopy(item.ttprice.toString())}>
                {item.ttprice} so'm
              </td>
              <td onClick={() => handleCopy(item.payment)}>{item.payment}</td>
              <td onClick={() => handleCopy(item.status)}>
                <h1 className={item.statusBg}>{item.status}</h1>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
