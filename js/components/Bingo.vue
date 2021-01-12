<template>

    <div class="flex w-full flex-wrap flex-wrap-reverse">
        <div class="w-full lg:w-1/3 flex flex-col justify-center items-center p-4">
            <img src="img/GENERATE_BUTTON.png" @click="download" class="cursor-pointer hover:shadow-md"/>
        </div>
        <div class="w-full lg:w-2/3 lg:flex-grow">
            <div class="text-right ml-auto">
                <img src="img/TITLE.png" class="mx-auto h-24 p-4"/>
                <div class="relative inline-block p-4" style="max-height: 90vh;" id="bingo">
                    <img src="img/BINGO_CARD.png" class="h-full opacity-90" style="max-height: 85vh;" />
                    <div class="absolute grid grid-cols-5 top-0 bottom-0 right-0 m-auto gap-6 overflow-hidden h-full w-full px-12 py-8">
                        <div v-for="(image, i) in selectedPredictions" class="flex flex-col items-center justify-center">
                            <img  :src="predictionPath(image)" class="" v-if="i !== 12"/>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>


</template>
<script>
import domtoimage from 'dom-to-image';
export default {

    methods: {
        download() {
            let node = document.getElementById('bingo');
            domtoimage.toPng(node)
                .then(function (dataUrl) {
                    let link = document.createElement('a');
                    link.download = 'sonic-bingo-card.png';
                    link.href = dataUrl;
                    link.click();
                });
        },
        predictionPath(index) {
            return 'img/predictions/f' + index + ".png";
        },
        shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }
    },
    computed: {
        selectedPredictions() {
            let all = Array.from(new Array(86), (x, i) => i + 1);
            all = this.shuffle(all);
            return all.slice(0, 25);
        }
    }
}

</script>
