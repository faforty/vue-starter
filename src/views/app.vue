<template>
    <div>
    	<nav class="navbar">
    		<div class="navbar__header navbar-logo">
    			<div class="b-logo">
    				<i class="ion-cloud b-logo__icon"></i> Opewel
    			</div>
    		</div>
    		<div class="navbar__header navbar__header--right">
    			<div class="b-mini-profile">
    				<img class="b-mini-profile__image" src="https://pp.vk.me/c630930/v630930768/58515/D6oc9GItZLM.jpg" /><i class="ion-arrow-down-b b-mini-profile__down"></i>
    			</div>
    		</div>
    	</nav>
    	<div class="container-fluid app-content">
    		<div class="app-head">
    			<h3 class="app-head__h3">Projects</h3>
    			<div class="app-head-info">
    				<div class="app-head-info__item">124 Total</div>
    				<div class="app-head-info__item">Sort by: Date Create</div>
    			</div>
    		</div>
    	</div>
    <div>
</template>
<style>
body {
	background-color: #f4f8f9
}
.b-logo {
	display: flex;
    align-items: center;
	font-size: 18px;
}
.b-logo__icon {
	margin-right: 10px;
	font-size: 30px;
	color: #7460ee;
}
.navbar {
	display: flex;
	position: relative;
	padding: 0 25px;
    min-height: 50px;
	background-color: #ffffff;
}
.navbar__header {
	display: inline-flex;
	align-items: center;
	height: 60px;
	width: 100%;
}
.navbar__header--right {
	justify-content: flex-end;
}
.navbar-logo {
	width: 250px;
}
.b-mini-profile {
    display: flex;
    align-items: center;
    padding: 18px 15px;
    margin: 0 -15px;
}
.b-mini-profile:hover {
	cursor: pointer;
    background: #f3f3f3;
}
.b-mini-profile__image {
	margin-right: 10px;
	border-radius: 50%;
	height: 25px;
	width: 25px;
}
.b-mini-profile__down {
	color: #90a4ae;
	font-size: 14px;
}
.app-content {
	padding: 0 25px;
	margin: 30px 0;
}
.app-head {
	display: flex;
	align-items: center;
}
.app-head__h3 {
	margin: 0;
	color: #7460ee;
}
.app-head-info {
	display: inline-flex;
	margin-left: 20px;
}
.app-head-info__item {
	font-size: 14px;
	color: #8298a3;
}
.app-head-info__item:not(:first-child) {
	margin-left: 20px;
}
.app-head-info__item:not(:last-child) {
	margin-right: 20px;
}
</style>