/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GWN010', {
    GWN_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    GWN_NRROM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWN_CDTPOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    GWN_CDCLFR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    GWN_CDTRP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GWN_CDMTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GWN_CDMTR2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    GWN_CDTPVC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    GWN_PLACAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWN_PLACAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWN_PLACAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWN_SIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GWN_DTIMPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWN_HRIMPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GWN_CALC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GWN_DTCALC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWN_HRCALC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GWN_USUIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    GWN_ORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GWN_PRIOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GWN_DTSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWN_HRSAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GWN_DISTAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GWN_NRCIDD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    GWN_CEPD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWN_BLOQPF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GWN_OBS: {
      type: "IMAGE",
      allowNull: true
    },
    GWN_AGRUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GWN_MTCALC: {
      type: "IMAGE",
      allowNull: true
    },
    GWN_RASTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    GWN_VALEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GWN_VPVAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GWN_VPNUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    GWN_VPCDOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    GWN_DTRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWN_HRRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GWN_HODSAI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GWN_HODRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GWN_FECHAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GWN_DTFECH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWN_NRCIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    GWN_CEPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWN_NRMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWN_MOTREA: {
      type: "IMAGE",
      allowNull: true
    },
    GWN_DTREAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWN_HRREAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    GWN_USUREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    GWN_LACRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    GWN_VIAGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GWN_CPESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GWN_CVOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GWN_CVAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    GWN_CQTDE: {
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
    GWN_ENVNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    GWN_MOTNFE: {
      type: "VARBINARY",
      allowNull: true
    }
  }, {
    tableName: 'GWN010'
  });
};
