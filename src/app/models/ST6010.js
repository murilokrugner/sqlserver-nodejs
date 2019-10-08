/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ST6010', {
    T6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    T6_CODFAMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    T6_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    T6_PERLOCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T6_MOVIBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T6_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    T6_DESCRIC: {
      type: "IMAGE",
      allowNull: true
    },
    T6_TIPO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    T6_UNIDAD1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    T6_MEDIA1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T6_TIPO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    T6_UNIDAD2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    T6_MEDIA2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T6_VARDIA1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T6_VARDIA2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T6_TIPOFAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T6_SINCRON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T6_BASHMIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T6_CATBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T6_PERESID: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T6_PTAXA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    }
  }, {
    tableName: 'ST6010'
  });
};
