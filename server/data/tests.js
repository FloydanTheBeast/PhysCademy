module.exports = [
    {
        name: 'Нахождение мгновенной скорости',
        task: 'Закон движения точки по прямой задается уравнением <InlineMath math="x(t)=2t^2-5t+1">. \
         Найдите мгновенную скорость точки через 10 секунд после начала движения',
        options: ['<InlineMath math="35\\frac{\\text м}{\\text с}">',
                '<InlineMath math="151\\frac{\\text м}{\\text с}">',
                '<InlineMath math="40\\frac{\\text м}{\\text с}">',
                '<InlineMath math="36\\frac{\\text м}{\\text с}">'],
        answer: 0,
        solution: 'Мгновенная скорость равна производной радиус-вектора по времени. \
                    <BlockMath math="v_\\text{мгн}(t)=x\'(t)=4t-5">\
                    тогда <InlineMath math="v_\\text{мгн}(10)=35\\frac{\\text м}{\\text с}">'
    }
]