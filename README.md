# React Phonebook Application
This application includes components built with React to create a simple phonebook application. The app allows users to list contacts, add new contacts, and filter contacts based on the entered text.

## Components

### List Component

This component provides an interface to display contacts and offers the option to filter them.

- It receives the list of contacts through the `contacts` prop, which is passed down from the parent component `Contact`.
- The component defines a state variable called `filterText`, which holds the text entered by the user and is used for filtering contacts.
- To filter contacts, it creates a new variable called `filtered`. This variable filters contacts that contain any property with the text specified in `filterText`, and adds them to the `filtered` array.
- The filtering method iterates through all the properties of each contact and returns the contact if any property contains the lowercase version of `filterText`. This allows case-insensitive matching of contacts.
- The component returns an HTML form that displays contacts from the `filtered` array.

### Contacts Component

This main component holds the overall structure of the application and combines other components together.

- It defines a state variable called contacts to store the list of ``contacts`` and initializes it with sample contacts.
- The component uses the ``useEffect`` hook to track changes in the ``contacts`` state and logs the state to the console whenever it changes. This helps to monitor updates to the contacts state.
- The component returns an HTML structure containing page title and components ``Form`` and ``List``.

### Form Component

This component presents a form to add new contacts.

- The ``addcontact`` prop is used to add new contacts, which is passed from the parent component ``Contacts``.
- The ``contacts`` prop is used within the ``useEffect`` hook to reset the form whenever the ``contacts`` state changes.
- It defines a state variable called ``form``, which stores the contact information entered by the user.
- The ``onChangeInput`` function is called whenever a value changes in any input field, and it updates the ``form`` state accordingly.
- The ``onSubmit`` function is executed when the form is submitted and adds a new contact to the ``contacts`` state.
- The component returns an HTML form with ``<input>`` fields for name and phone number, and a ``"Add Contact"`` button.

This is a simple phonebook application demonstrating how to develop a user interface, manage state, and communicate between components using React...

# React Telefon Rehberi Uygulaması

Bu uygulama, React kullanarak basit bir telefon rehberi uygulaması yapmak için kullanılan bileşenleri içerir. Uygulama, kullanıcılara iletişimleri listeleme, yeni iletişim ekleyebilme ve iletişimleri filtreleme imkanı sağlar.

## Bileşenler

### List Bileşeni

Bu bileşen, iletişimleri listeleyen bir arayüz sunar ve ayrıca kullanıcılara iletişimleri filtreleme seçeneği sağlar.

- `contacts` prop'u aracılığıyla, ana bileşen olan `Contacts` tarafından iletilen iletişim listesini alır.
- `filterText` adında bir state değişkeni tanımlanır, bu değişken kullanıcı tarafından girilen metni tutar ve iletişimleri filtrelemek için kullanılır.
- İletişimleri filtrelemek için `filtered` adında yeni bir değişken tanımlanır. `filterText` içeren herhangi bir özelliği olan iletişimleri bulur ve bunları `filtered` dizisine ekler.
- Filtreleme metodu, her iletişimdeki tüm özellikleri döner ve içerisinde `filterText`in küçük harfli halini içeriyorsa bu iletişimi döndürür. Böylece, büyük/küçük harf duyarlılığını dikkate almaksızın eşleşen iletişimleri gösterir.
- Sonuç olarak, `filtered` dizisindeki iletişimleri listeleyen bir HTML formu döndürür.

### Contacts Bileşeni

Bu ana bileşen, uygulamanın genel yapılandırmasını içerir ve diğer bileşenleri bir araya getirir.

- İletişimleri tutmak için bir state değişkeni olan `contacts` tanımlanır ve örnek iletişimlerle başlatılır.
- Bileşen, `useEffect` kancasını kullanarak `contacts` state'ini takip eder ve her değiştiğinde bu durumu konsola basar. Bu, `contacts` state'inin güncellenmesini izlemeye yarar.
- Sayfa başlığı ve `Form` ile `List` bileşenlerini içeren bir HTML yapı döndürür.

### Form Bileşeni

Bu bileşen, yeni iletişimleri eklemek için bir form sunar.

- `addcontact` prop'u, yeni iletişimlerin ana bileşen olan `Contacts` tarafından eklenmesi için kullanılır.
- `contacts` prop'u, `useEffect` kancasında kullanılarak, `contacts` state'i değiştiğinde formun sıfırlanmasına yardımcı olur.
- `form` adında bir state değişkeni tanımlanır ve bu değişken, kullanıcı tarafından girilen iletişim bilgilerini tutar.
- `onChangeInput` fonksiyonu, herhangi bir giriş alanında bir değer değiştiğinde çağrılır ve `form` state'ini günceller.
- `onSubmit` fonksiyonu, form gönderildiğinde çalışır ve yeni bir iletişimi `contacts` state'ine ekler.
- İsim ve telefon numarası girişi için iki adet `<input>` elemanı ve bir ``"Add Contact"`` düğmesi içeren bir HTML formu döndürür.


Bu, basit bir telefon rehberi uygulamasıdır. Proje, kullanıcı arayüzünü geliştirme, state yönetimi ve bileşenler arasında iletişim kurma becerilerini göstermektedir.