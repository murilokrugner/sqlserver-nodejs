/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTB990', {
    CTB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTB_EMPDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTB_FILDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTB_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CTB_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CTB_CTADES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTB_CCDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTB_ITEMDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTB_CLVLDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTB_TPSLDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTB_LINHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CTB_EMPORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CTB_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    CTB_CT1INI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTB_CT1FIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CTB_CTTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTB_CTTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTB_CTDINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTB_CTDFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTB_CTHINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTB_CTHFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CTB_TPSLDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTB_IDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CTB_FORMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CTB_HAGLUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
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
    tableName: 'CTB990'
  });
};
