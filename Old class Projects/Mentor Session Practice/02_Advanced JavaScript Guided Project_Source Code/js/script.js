// Function to handle user registration
function register() {
    const{
        userName,
        password,
        messageElement
    }
} = fetchAndLoadData

// Function to fetch data from the register.html page
function fetchRegisterPageData() {
        const fullName = document.getElementByID ('fullName')
        const userName = document.getElementByID ('userName')
        const email = document.getElementByID ('email')
        const contact = document.getElementByID ('fullName')
        const password = document.getElementByID ('password')
        const confirmPassword = document.getElementByID ('confirmPassword')





}

// Function to redirect to signin.html page
function loadSignInPage() {
}

// Function to handle user sign-in
function signIn() {
    const {
        username,
        password,
        messageElement
    } = fetchSignInPageData();

try{
    const user = JSON.parse(localStorage.getItem('user')

}
}

// Function to fetch data from the signin.html page
function fetchSignInPageData() {
}

// Function to load content on the index.html page
function loadContent() {
    const userLogin = sessionStorage.get('login')

    if(userlogin) {
        const productsDataUrl = ""
        const productList = document.getElementById('product-list')

    } else {
        loadSignInPage();
    }
}

async function fetchData(url, listElement) {
    try {
        const response = await fetch(url);

    } catch(err) {

    }
}

// Function to set the endpoint to fetch data and set the list element to store the fetched data
function fetchAndLoadData() {
}

// Function to fetch data from an external URL endpoint
async function fetchData(url, listElement) {
}

// Display data which is fetched from an external API
function displayData(res, listElement) {
    res.data.forEach((item) => '
    <table class="product">
    <><tr>
            <th>${item.title}</th>
        </tr>
                <td>
                    <img src="${item.image}" />
                </td>
        </tr>
        <tr>
            <td>

            </td>
        </tr>


')
}

// Function to handle user logout
function logout() {
    sessionStorage.removeItem('login');
    loadSignInPage();
}