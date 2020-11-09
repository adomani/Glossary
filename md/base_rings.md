<script src="/MathJax/MathJax.js?config=TeX-AMS_CHTML,local/local"></script>

\\( \def\Z{{\mathbb{Z}}} \def\Q{{\mathbb{Q}}} \def\spec{\operatorname{Spec}} \def\oh{\frac{1}{2}} \def\zoh{\Z[\oh]} \\)

# Base rings, base schemes, ground fields,...

An important feature of schemes is that they are well-suited to be viewed "in families".  This means that, in the back
of our minds, there should always be a morphism of schemes \\(X \to Y\\) more or less explicitly mentioned.  The scheme
\\(Y\\) is the *base scheme*.  This point of view is helpful even in the case in which we are not thinking of a
morphism.  In such cases, likely the base is a single point, e.g. the spectrum of a field.

A *base ring* is simply the case above when there is a ring \\(R\\) such that \\(Y = \spec R\\); equivalently, the base
scheme \\(Y\\) is affine.  If \\(R\\) is a field, then \\(R\\) is also called a *ground field*.

**Exercise.** Prove or disprove: *A scheme with only one point is the spectrum of a field*.

A notational convention is to write _families_ and _structure morphisms to the ground field/ring_ vertically:

|uno|due|
|---|---|


\\[
  \begin{array}{c}
  X \cr
  \downarrow \cr
  Y
  \end{array}
\\]

\( \begin{array}{c}
  X \cr
  \downarrow \cr
  Y
  \end{array} \)




| \begin{array}{c} X \cr \downarrow \cr Y \end{array} | ![ima](2020_11_03_small_lavagna.png)|
|---|---|


The morphism \\(X \to Y\\) need not satisfy any further property.  However, it is common that _families_ satisfy extra
conditions, implicitly or explicitly.  Common assumptions are: smooth, proper, projective, flat, equi-dimensional,
finite type, locally of finite type...


### Running example

As usual, our running example is an elaboration of
\\( \oh \in \Q\\).

1. **The family \\(\Z \subset \Z[\oh]\\).**  
The base is \\(\spec \Z\\), the total space of the family is \\(\spec \Z [\oh]\\).  These two schemes coincide away from
the prime \\((2)\\): the family
\\[
  \begin{array}{c}
  \spec \Z [\oh] \cr
  \downarrow \cr
  \spec \Z
  \end{array}
\\]
is the inclusion of the complement of the closed point \\((2) \in \spec \Z\\).  
This family *is* open, smooth, flat, of relative dimension 0...  
It *is not* projective, proper, surjective, closed, universally closed...  

1. **The family \\(\Z[\oh] \subset \Q\\).**  
The base is \\(\spec \Z[\oh]\\), the total space of the family is \\(\spec \Q\\).  The total space of the family is a
single point: the family
\\[
  \begin{array}{c}
  \spec \Q \cr
  \downarrow \cr
  \spec \Z [\oh]
  \end{array}
\\]
is the inclusion of the generic point \\( (0) \in \spec \Z[\oh]\\) of the base.  
This family *is not* locally of finite type, open, smooth, flat, projective, proper, surjective, closed, universally
closed...  In fact, it is a bit of a struggle to find *any* property that this morphism has!