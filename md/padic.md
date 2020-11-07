<script src="/MathJax/MathJax.js?config=TeX-AMS_CHTML,local/local"></script>

\\( \def\Z{{\mathbb{Z}}} \def\Q{{\mathbb{Q}}} \def\N{{\mathbb{N}}} \def\spec{\operatorname{Spec}} \def\oh{\frac{1}{2}} \def\zoh{\Z[\oh]} \\)


# \\(p\\)-adic numbers

Let \\(a \in \N\\) be a natural number and fix a prime number \\(p\\).  For each positive integer \\(n \geq 1\\), denote by \\(a\_n \in \\{0,1,\ldots, p\^n-1\\}\\) the remainder upon division of \\(a\\) by \\(p\^n\\).  The sequence \\( (a\_n)_{n \in \N} \\) has two properties:

1. for all \\(n \geq 2\\), the congruence \\(a\_n \equiv a\_{n-1} \pmod{p\^{n-1}}\\) holds;
2. for \\(n\\) sufficiently large (i.e. as soon as \\(a < p\^n\\)), the equality \\(a\_n = a\\) holds.

Informally, a \\(p\\)-adic integer is a sequence of integers satisfying 1., but not necessarily 2.


  If we look at the sequence of residues upon division of \\(a\\) by larger and larger powers of \\(p\\), 


Let's begin with an example.  Suppose that we want to solve the equation
\\[ x\^2 = -1 \\]
in *integers*.

**Case 1:** we get lucky and we try to solve it modulo 3.  Since there are no solutions modulo 3, we deduce that there is no square root of \\(-1\\) in \\(\Z\\).

**Case 2:** we try to solve it modulo 5.  Now, we find that \\( 2 \pmod{5} \\) is a solution.  Ok, what about solving it modulo \\( 5\^2 \\)?  Well, \\(7 \pmod{5\^2} \\) works.  Let's be more ambitious: does there exist a sequence \\( (a\_n)_{n \in \N} \\) of integers such that, for all \\(n \in \N\\), the congruences

\\[ {a\_n}\^2 \equiv -1 \pmod{5\^n} \hspace{30pt} {\textrm{and}} \hspace{30pt} a\_n \equiv a\_{n-1} \pmod{5\^{n-1}} \\]
hold?

The first condition says that we are looking for a sequence of integers providing solution to our equations.  The second condition is there to provide "coherence" among the solutions.  

**Exercise.**  Show that there are 