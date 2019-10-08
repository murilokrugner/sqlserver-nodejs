/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CD7010', {
    CD7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CD7_TPMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CD7_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CD7_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CD7_ESPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CD7_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CD7_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CD7_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CD7_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CD7_LOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    CD7_QTDLOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CD7_FABRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CD7_VALID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CD7_REFBAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CD7_TPPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CD7_PRECO: {
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
    },
    CD7_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'CD7010'
  });
};
