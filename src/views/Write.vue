<template>
	<div class="write-wrap">
		<!-- <SubHeader title="글쓰기" @left="leftBtnAction" @right="rightBtnAction">
			<template #left> &lt; </template>
			<template #right>공유하기</template>
		</SubHeader> -->
		글쓰기페이지
	</div>
</template>

<script>
// import SubHeader from '../components/Common/SubHeader_backup.vue';

export default {
	name: 'Write'
	// components: { SubHeader }
};
</script>

<style lang="scss" scoped>
.write-wrap {
	max-width: 450px;
	margin: 0 auto;
	height: 100%;
	position: relative;
}
</style>
