/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('XX4010', {
    XX4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    XX4_ROTINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    XX4_MODEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    XX4_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    XX4_SENDER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XX4_RECEIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XX4_METODO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XX4_TPOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XX4_EXPFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    XX4_LOADRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    XX4_LOADSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    XX4_CHANEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XX4_UNMESS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    XX4_XSD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    XX4_FILEXE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    XX4_CHGXML: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    XX4_SNDVER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    XX4_ALIASP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    XX4_FORMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    }
  }, {
    tableName: 'XX4010'
  });
};
