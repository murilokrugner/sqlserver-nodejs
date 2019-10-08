/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SLF010', {
    LF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    LF_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    LF_DESCPER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LF_DESCVAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LF_LOGERRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    LF_FRTAUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LF_ACESSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    LF_MULTIMI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LF_TPVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    LF_NUMCART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    LF_OPCDESC: {
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
    LF_TOTDESP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LF_TOTDESV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    LF_CODSIAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'SLF010'
  });
};
