/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VC2010', {
    VC2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VC2_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VC2_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VC2_NOMCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VC2_PERFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VC2_CARCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VC2_ASSUNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VC2_PRICON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VC2_GRAINF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VC2_HORPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    VC2_DDDCEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VC2_TELCEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VC2_DDDCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VC2_TELBIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VC2_NUMBIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VC2_ESTCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VC2_DDDRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    VC2_TELRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VC2_ENDRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VC2_BAIRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    VC2_CIDRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    VC2_ESTRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VC2_CEPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VC2_DATNAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VC2_SEXPES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VC2_ESTCIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VC2_OBSMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VC2_EMAILC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    VC2_RELFIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    tableName: 'VC2010'
  });
};
