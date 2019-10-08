/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMW010', {
    TMW_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TMW_PCMSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMW_CODUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TMW_DTINIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMW_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMW_DTGERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMW_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    TMW_CCDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TMW_CCATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TMW_CLIDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMW_CLIATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMW_BASEDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TMW_DTREFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMW_FILDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TMW_FILATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    TMW_USERGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    }
  }, {
    tableName: 'TMW010'
  });
};
