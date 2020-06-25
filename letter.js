unction minimumConcat(initial, goal) {
         Let count = 0;
         Let sequence = ‘ ‘;
        İnitial.split(‘ ‘).map(letter => {
        Sequence = sequence + letter
});
        Let iterator = Array.apply(null, Array(26)).map(Number .prototype.value0f, 0), secondIter = Array.apply(null, Array(26)).map(Number.prototype.value0f, 0);
        Sequence =   “^[“ + sequence + “]”$”;
          İf (!RegExp(sequence).test(goal)) return -1;
             For (let i = 0; i < initial.lenght; i++) {
        İterator[initial.charCodeAt(i) – 97]++;
}
             For(let i = ; ++) {
        secondIter[goal.charCodeAt(i) – 97]++;
}
             For (let i = 0; i < 26; i++) {
        Count += Math.abs(iterator[i] – secondIter[i]);
}
        return count;
}

        Console.log(minimumConcat(“abc”, “abcbc”));
