/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TP9010', {
    TP9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TP9_CODFAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TP9_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TP9_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TP9_CALEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TP9_CENTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TP9_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TP9_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TP9_TIPMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TP9_FABRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TP9_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TP9_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TP9_CODEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TP9_PRIORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TP9_MOVBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TP9_CUSTOH: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TP9_TEMCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TP9_TPCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TP9_PERACO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TP9_UNIACO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TP9_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TP9_DESCRI: {
      type: "IMAGE",
      allowNull: true
    },
    TP9_ACOPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TP9_VALANO: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TP9010'
  });
};
