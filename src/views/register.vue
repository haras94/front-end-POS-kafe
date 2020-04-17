<template>
  <div>
    <FrontCover/>

    <div class="kotak_register">
    <form>
            <input type="text" v-model="fullname" name="username"
            class="form_register" placeholder="Full Name">

            <input type="text" v-model="email" name="email"
            class="form_register" placeholder="Email Address">

            <input type="password" v-model="password" name="password"
            class="form_register" placeholder="Password">

            <div class="formtombol">
                <button  @click="register" class="tombol_signup">Sign Up</button>
                <router-link to="/Login" class="tombol_login">Login</router-link>
            </div>
    </form>
</div>
        <div class="h1ya">
            <h1 class="judulnya"> Register</h1>
            <p class="tulisan_register">Welcome Back,Please Register</p>
            <p class="tulisan_register1">to create account</p>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>
    .judulnya{
    position: absolute;
    font-family: 'Montserrat', sans-serif;
    font-size: 64px;
    color: #424242;
    right: 240px;
    top: 100px;
}

.tulisan_register{
    text-align: right center;
    position: absolute;
    width: 388px;
    height: 110px;
    right: 113px;
    top: 185px;
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    line-height: 22px;
    color: #424242;
}

.tulisan_register1{
    text-align: right center;
    position: absolute;
    width: auto;
    height: auto;
    right: 350px;
    top: 210px;
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    line-height: 22px;
    color: #424242;
}

.kotak_register{
    width: 350px;
    background: white;
    /*meletakkan form ke kanan*/
    margin: 80px auto;
    padding: 30px 20px;
    border: black;
    position: absolute;
    font-family: 'Montserrat', sans-serif;
    right: 130px;
    top: 180px;
    float: right;
}
.kotak_register h1{
    position: absolute;
    top:-30px;
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    font-weight: bold;

}
.kotak_Register p{
    line-height: 0;
    position: relative;
    top:-20px;
    font-family: 'Montserrat', sans-serif;
    position: absolute;
}

.formtombol{
    position: absolute;
    bottom: 0px;
    left: 18px;

}

.form_register{
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    font-size: 11pt;
    margin-bottom: 20px;
    float: right;
}

.tombol_signup{
    background: #141414;
    color: white;
    font-size: 11pt;
    width: 100px;
    border: none;
    border-radius: 3px;
    padding: 10px 20px;
    text-decoration: none;
}

.tombol_login{
    background: #b5aba8 ;
    color: #e8e4e3;
    font-size: 11pt;
    width: 100px;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    text-decoration: none;
}
</style>