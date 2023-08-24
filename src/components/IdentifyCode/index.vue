<template>
    <div class="canvas" @click="refreshCode">
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const canvas = ref<HTMLCanvasElement>()
const curIdentifyCode = ref("")
const emit = defineEmits(["updateIdentifyCode"])
const props = defineProps({
    identifyCode: {
        type: String,
        default: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    },
    fontSizeMin: {
        type: Number,
        default: 16,
    },
    fontSizeMax: {
        type: Number,
        default: 40,
    },
    backgroundColorMin: {
        type: Number,
        default: 180,
    },
    backgroundColorMax: {
        type: Number,
        default: 240,
    },
    colorMin: {
        type: Number,
        default: 50,
    },
    colorMax: {
        type: Number,
        default: 160,
    },
    lineColorMin: {
        type: Number,
        default: 40,
    },
    lineColorMax: {
        type: Number,
        default: 180,
    },
    dotColorMin: {
        type: Number,
        default: 0,
    },
    dotColorMax: {
        type: Number,
        default: 255,
    },
    contentWidth: {
        type: Number,
        default: 112,
    },
    contentHeight: {
        type: Number,
        default: 38,
    },
});

//生成一个随机数
const randomNum = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min)
}

//生成一个随机颜色
const randomColor = (min: number, max: number) => {
    const r = randomNum(min, max)
    const g = randomNum(min, max)
    const b = randomNum(min, max)
    return "rgb(" + r + "," + g + "," + b + ")"
}

//绘制验证码
const drawText = (ctx: CanvasRenderingContext2D, txt: string, i: number) => {
    ctx.fillStyle = randomColor(props.colorMin, props.colorMax);
    ctx.font = randomNum(props.fontSizeMin, props.fontSizeMax) + "px SimHei"
    const x = (i + 1) * (props.contentWidth / (curIdentifyCode.value.length + 1))
    const y = randomNum(props.fontSizeMax, props.contentHeight - 5)
    const deg = randomNum(-45, 45)
    ctx.translate(x, y)
    ctx.rotate((deg * Math.PI) / 180)
    ctx.fillText(txt, 0, 0)
    ctx.rotate((-deg * Math.PI) / 180)
    ctx.translate(-x, -y)
}

//绘制干扰线
const drawLine = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = randomColor(props.lineColorMin, props.lineColorMax)
        ctx.beginPath()
        ctx.moveTo(randomNum(0, props.contentWidth), randomNum(0, props.contentHeight))
        ctx.lineTo(randomNum(0, props.contentWidth), randomNum(0, props.contentHeight))
        ctx.stroke();
    }
}

//绘制干扰点
const drawDot = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < 50; i++) {
        ctx.fillStyle = randomColor(0, 255)
        ctx.beginPath()
        ctx.arc(randomNum(0, props.contentWidth), randomNum(0, props.contentHeight), 1, 0, 2 * Math.PI)
        ctx.fill()
    }
}

const drawPic = () => {
    const ctx = canvas.value?.getContext("2d") as CanvasRenderingContext2D
    ctx.textBaseline = 'bottom'
    //绘制背景
    ctx.fillStyle = randomColor(props.backgroundColorMin, props.backgroundColorMax)
    ctx.fillRect(0, 0, props.contentWidth, props.contentHeight)
    for (let i = 0; i < curIdentifyCode.value.length; i++) {
        drawText(ctx, curIdentifyCode.value[i], i)
    }
    drawLine(ctx)
    drawDot(ctx)
}

const makeCode = (str: string, l: number) => {
    for (let i = 0; i < l; i++) {
        curIdentifyCode.value += str[randomNum(0, str.length)]
    }
    emit("updateIdentifyCode", curIdentifyCode.value)
}

const refreshCode = () => {
    curIdentifyCode.value = ''
    makeCode(props.identifyCode, 4)
}

onMounted(() => {
    drawPic()
    refreshCode()
})

defineExpose({
    refreshCode
})

watch(curIdentifyCode, () => {
    drawPic()
})
</script>